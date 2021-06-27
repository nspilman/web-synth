import { getFrequency, keyNames } from "../data/notes";
import Envelope from "./Envelope";
import IOscillatorParameters from "../interfaces/IOscillatorParameters";
import IEnvelopeParameters from "../interfaces/IEnvelopeParameters";
import Wavetable from "./Wavetable";
import waveforms, { getWave } from "../data/waveforms";

const maxNumOscillators = 2;

export default class Voice {
  isActivelyPlaying: boolean; // stores if note is on/off
  numPlayingOscillators: number; // stores how many oscillators were triggered at the last note on
  frequency: number; // frequency of oscillators
  note: string; // note that oscillator should play
  octave: number; // octave that oscillator should play
  oscillators: OscillatorNode[]; // currently playing oscillators when note is on/off
  numOscillators: number; // number of oscillators to play at next note on/off trigger
  detune: number; // detune of oscillators (if numOscillators > 1, even-indexed oscillators get +, odd-indexed get -)
  audioContext: AudioContext; // audio context
  envelopeGain: GainNode; // gain that envelope will control
  envelope: Envelope; // envelope

  constructor(
    note: keyNames,
    octave: number,
    oscillatorParameters: IOscillatorParameters,
    envelopeParameters: IEnvelopeParameters,
    audioContext: AudioContext
  ) {
    this.audioContext = audioContext;
    this.envelopeGain = this.audioContext.createGain();
    this.note = note;
    this.octave = octave;
    this.frequency = getFrequency(note, octave);
    this.numOscillators = oscillatorParameters.numOscillators;
    this.detune = oscillatorParameters.oscillatorUnisonDetune;
    this.isActivelyPlaying = false;
    this.numPlayingOscillators = 0;
    this.oscillators = [];
    this.resetOscillators();

    this.envelope = new Envelope(this.envelopeGain, this.audioContext);
    const { attackMs, decayMs, sustain, releaseMs } = envelopeParameters;
    this.envelope.setAttackTimeInSec(attackMs / 1000);
    this.envelope.setDecayTimeInSec(decayMs / 1000);
    this.envelope.setSustainGain(sustain);
    this.envelope.setReleaseTimeInSec(releaseMs / 1000);
  }

  play(nodeToConnect: AudioNode, wave: OscillatorType, wavetable: Wavetable) {
    if (this.isActivelyPlaying) {
      return;
    }

    for (var i = 0; i < this.numOscillators; i++) {
      const osc = this.audioContext.createOscillator();
      this.setWave(osc, wave, wavetable);
      osc.frequency.value = this.frequency;
      osc.type = wave;
      osc.detune.value = this.getDetuneVal(i, this.detune);
      osc.connect(this.envelopeGain);
      osc.start();
      this.oscillators[i] = osc;
    }

    this.envelopeGain.connect(nodeToConnect);
    this.envelope.onNoteOn();

    this.isActivelyPlaying = true;
    this.numPlayingOscillators = this.numOscillators;
  }

  stop() {
    if (!this.isActivelyPlaying) {
      return;
    }

    // save the currently playing oscillators so the envelope can continue to hold them during release
    var curOsc = [];
    for (var i = 0; i < this.numPlayingOscillators; i++) {
      curOsc.push(this.oscillators[i]);
    }

    // reset main oscillators since curOsc will be passed to the envelope
    this.resetOscillators();

    // schedule current set of oscillators to be destructed after release
    this.envelope.onNoteOff(this.stopPlayingOsc, curOsc);

    this.isActivelyPlaying = false;
  }

  isPlaying() {
    return this.isActivelyPlaying;
  }

  setDetune(detune: number) {
    this.detune = detune;
    for (var i = 0; i < this.oscillators.length; i++) {
      this.oscillators[i].detune.value = this.getDetuneVal(i, this.detune);
    }
  }

  setNumOscillators(newNum: number) {
    if (newNum > maxNumOscillators) {
      throw newNum + " is greater than max number of oscillators";
    }

    this.numOscillators = newNum;
  }

  getDetuneVal(oscIndex: number, detune: number) {
    return oscIndex % 2 == 0 ? detune : -detune;
  }

  setWave(osc: OscillatorNode, wave: OscillatorType, wavetable: Wavetable) {
    if (wave == getWave(waveforms.CUSTOM)) {
      if (wavetable == null) {
        console.log("Tried to set custom wavetable, but wavetable was null, will fall back to sine...");
        osc.type = getWave(waveforms.SINE);
      }
      else {
        var periodicWave = wavetable.getPeriodicWave(this.audioContext);
        osc.setPeriodicWave(periodicWave);
      }
    }
    else {
      osc.type = wave;
    }
  }

  stopPlayingOsc(playingOsc: OscillatorNode[]) {
    for (var i = 0; i < playingOsc.length; i++) {
      const osc = playingOsc[i];
      osc?.stop();
      osc?.disconnect();
    }
  }

  resetOscillators() {
    this.oscillators = [];
    for (var i = 0; i < maxNumOscillators; i++) {
      this.oscillators.push(this.audioContext.createOscillator());
    }
  }
}
