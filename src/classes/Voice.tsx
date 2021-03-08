import { getFrequency } from "../data/notes";
import Envelope from "./Envelope";
import IOscillatorParameters from "../interfaces/IOscillatorParameters";
import IEnvelopeParameters from "../interfaces/IEnvelopeParameters";
import filterNode from "./filterNode";
import IFilterParameters from "../interfaces/IFilterParameters";

const maxNumOscillators = 2;

/*
Voice signal chain:

oscillator
    |
envelope
    |
filter
*/
export default class Voice {
    isActivelyPlaying: boolean // stores if note is on/off
    numPlayingOscillators: number // stores how many oscillators were triggered at the last note on 
    frequency: number // frequency of oscillators
    note: string // note that oscillator should play
    octave: number // octave that oscillator should play
    oscillators: OscillatorNode[] // currently playing oscillators when note is on/off
    numOscillators: number // number of oscillators to play at next note on/off trigger
    detune: number // detune of oscillators (if numOscillators > 1, even-indexed oscillators get +, odd-indexed get -)
    audioContext: AudioContext // audio context
    envelopeGain: GainNode // gain that envelope will control
    envelope: Envelope // envelope
    filterNode : BiquadFilterNode // filter for voice

    constructor(
        note: string,
        octave: number,
        oscillatorParameters : IOscillatorParameters,
        envelopeParameters: IEnvelopeParameters,
        filterParameters: IFilterParameters,
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

        this.envelope = new Envelope(this.envelopeGain.gain, this.audioContext);
        const { attackMs, decayMs, sustain, releaseMs } = envelopeParameters;
        this.envelope.setAttackTimeInSec(attackMs / 1000);
        this.envelope.setDecayTimeInSec(decayMs / 1000);
        this.envelope.setSustainGain(sustain);
        this.envelope.setReleaseTimeInSec(releaseMs / 1000);

        this.filterNode = filterNode(this.audioContext, filterParameters.type, filterParameters.freq);
        this.envelopeGain.connect(this.filterNode);
    }

    play(nodeToConnect: AudioNode, wave: OscillatorType) {
        if (this.isActivelyPlaying) {
            return;
        }

        for (var i = 0; i < this.numOscillators; i++) {
            const osc = this.audioContext.createOscillator();
            osc.frequency.value = this.frequency;
            osc.connect(this.envelopeGain);
            osc.type = wave;
            osc.detune.value = this.getDetuneVal(i, this.detune);
            osc.start();
            this.oscillators[i] = osc;
        }

        this.filterNode.connect(nodeToConnect);
        this.envelope.onNoteOn();

        this.isActivelyPlaying = true;
        this.numPlayingOscillators = this.numOscillators;
    }

    stop() {
        if (!this.isActivelyPlaying) {
            return;
        }

        // save the currently playing oscillators so the envelope can continue to hold them during release
        var curOsc = []
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

    setFilterFreq(newFreq: number) {
        this.filterNode.frequency.value = newFreq;
    }

    setFilterQ(newQ: number) {
        this.filterNode.Q.value = newQ;
    }

    setFilterType(newType: BiquadFilterType) {
        this.filterNode.type = newType;
    }

    getDetuneVal(oscIndex: number, detune: number) {
        return (oscIndex % 2 == 0) ? detune : -detune;
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