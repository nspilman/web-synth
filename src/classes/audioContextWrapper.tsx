import { getAllFrequencies, keyNames } from "../data/notes";
import masterGainNode from "./masterGainNode";
import filterNode from "./filterNode";
import Voice from "./Voice"
import IAudioContextParameters from "../interfaces/IAudioContextParameters"
import WaveshaperNodeWrapper from "./WaveshaperNodeWrapper";
import WhiteNoiseOscillator from "./WhiteNoiseOscillator";
import { getWave } from "../data/waveforms";
import { getFilterType } from "../data/filterTypes";

class AudioContextWrapper {
    audioContext : AudioContext
    masterGainNode : GainNode
    filterNode : BiquadFilterNode
    waveshaperNode : WaveshaperNodeWrapper
    voices: Voice[]
    numPlayingVoices: number
    waveform : OscillatorType
    octave : number
    noiseOsc: WhiteNoiseOscillator

    constructor(defaultParameters : IAudioContextParameters){
        const {
            gain, 
            filterParameters,
            oscillatorParameters,
            envelopeParameters,
            waveformId, 
            octave, 
            noiseGain,
        } = defaultParameters
        const browserCompatibleAudioContext = window.AudioContext || window.webkitAudioContext;
        this.audioContext = new browserCompatibleAudioContext();

        this.masterGainNode = masterGainNode(this.audioContext, gain);
        const { typeId, freq } = filterParameters;
        this.filterNode = filterNode(this.audioContext, getFilterType(typeId), freq);
        this.waveshaperNode = new WaveshaperNodeWrapper(this.audioContext);

        this.filterNode.connect(this.waveshaperNode.waveshaperNode);
        this.waveshaperNode.waveshaperNode.connect(this.masterGainNode);

        this.masterGainNode.connect(this.audioContext.destination);
        this.waveform = getWave(waveformId);
        this.octave = octave;

        this.voices = getAllFrequencies(0,8).map(
            note => new Voice(
                note.keyName,
                note.octave,
                oscillatorParameters,
                envelopeParameters,
                this.audioContext)
        );

        this.noiseOsc = new WhiteNoiseOscillator(this.audioContext, noiseGain, this.filterNode);

        this.numPlayingVoices = 0;
    }

    playNote(note : keyNames){
        const voice = this.findOscWithNoteAndOctave(this.voices, note);
        if (!voice) {
            console.log("Unable to find voice with note " + note + " and octave " + this.octave);
            return
        }

        if (voice.isPlaying()) {
            return;
        }

        voice.play(this.filterNode, this.waveform);

        // noise always plays behind voice
        this.noiseOsc.play();
        this.numPlayingVoices++;
    }


    stopNote(note : string){
        const voice = this.findOscWithNoteAndOctave(this.voices, note);
        if (!voice) {
            console.log("Unable to find voice with note " + note + " and octave " + this.octave);
            return;
        }

        if (!voice.isPlaying()) {
            return;
        }

        voice.stop();

        this.numPlayingVoices = (this.numPlayingVoices - 1) < 0 ? 0 : this.numPlayingVoices - 1;

        // only stop noise when all voices have stopped
        if (this.numPlayingVoices == 0) {
            this.noiseOsc.stop();
        }
    }

    setGain(newGain : number){
        this.masterGainNode.gain.value = newGain;
    }

    setWaveform(newWaveform: OscillatorType){
        this.waveform = newWaveform;
    }
    
    setOctave(octave: number){
        this.octave = octave;
    }

    setFilterType(newType : BiquadFilterType) {
        this.filterNode.type = newType;
    }

    setFilterFreq(newFreq : number) {
        this.filterNode.frequency.value = newFreq;
    }

    setFilterQ(newQ : number) {
        this.filterNode.Q.value = newQ;
    }

    setDistortionAmount(newAmount: number) {
        this.waveshaperNode.setCurveForAmount(newAmount);
    }

    setNumOscillators(newNum: number) {
        for (var i = 0; i < this.voices.length; i++) {
            this.voices[i].setNumOscillators(newNum);
        }
    }

    setNoiseGain(newGain: number) {
        this.noiseOsc.setGain(newGain);
    }

    setOscillatorUnisonDetune(newDetune: number) {
        for (var i = 0; i < this.voices.length; i++) {
            this.voices[i].setDetune(newDetune);
        }
    }

    setAttackMs(attackMs: number) {
        for (var i = 0; i < this.voices.length; i++) {
            this.voices[i].envelope.setAttackTimeInSec(attackMs / 1000);
        }
    }

    setDecayMs(decayMs: number) {
        for (var i = 0; i < this.voices.length; i++) {
            this.voices[i].envelope.setDecayTimeInSec(decayMs / 1000);
        }
    }

    setSustain(sustain: number) {
        for (var i = 0; i < this.voices.length; i++) {
            this.voices[i].envelope.setSustainGain(sustain);
        }
    }

    setReleaseMs(releaseMs: number) {
        for (var i = 0; i < this.voices.length; i++) {
            this.voices[i].envelope.setReleaseTimeInSec(releaseMs / 1000);
        }
    }

    findOscWithNoteAndOctave(voiceList: Voice[], note: string) {
        return voiceList.find(osc => osc.octave == this.octave && osc.note == note);
    }
}

export default AudioContextWrapper;