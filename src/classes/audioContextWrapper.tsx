import { getAllFrequencies } from "../data/notes";
import masterGainNode from "./masterGainNode";
import Voice from "./Voice"
import IAudioContextParameters from "../interfaces/IAudioContextParameters"
import WaveshaperNodeWrapper from "./WaveshaperNodeWrapper";
import WhiteNoiseOscillator from "./WhiteNoiseOscillator";

class AudioContextWrapper {
    audioContext : AudioContext
    masterGainNode : GainNode
    waveshaperNode : WaveshaperNodeWrapper
    voices: Voice[]
    numPlayingVoices: number
    waveform : OscillatorType
    octave : number
    //noiseOsc: WhiteNoiseOscillator

    constructor(defaultParameters : IAudioContextParameters){
        const {
            gain, 
            filterParameters,
            oscillatorParameters,
            envelopeParameters,
            waveForm, 
            octave, 
            noiseGain,
        } = defaultParameters
        const browserCompatibleAudioContext = window.AudioContext || window.webkitAudioContext;
        this.audioContext = new browserCompatibleAudioContext();

        this.masterGainNode = masterGainNode(this.audioContext, gain);
        const { type, freq } = filterParameters;
        this.waveshaperNode = new WaveshaperNodeWrapper(this.audioContext);

        this.waveshaperNode.waveshaperNode.connect(this.masterGainNode);

        this.masterGainNode.connect(this.audioContext.destination);
        this.waveform = waveForm;
        this.octave = octave;

        this.voices = getAllFrequencies(0,8).map(
            note => new Voice(
                note.noteName,
                note.octave,
                oscillatorParameters,
                envelopeParameters,
                filterParameters,
                this.audioContext)
        );

        // TODO: make noise oscillator a special case of voice
        //this.noiseOsc = new WhiteNoiseOscillator(this.audioContext, noiseGain, this.filterNode);

        this.numPlayingVoices = 0;
    }

    playNote(note : string){
        const voice = this.findOscWithNoteAndOctave(this.voices, note);
        if (!voice) {
            console.log("Unable to find voice with note " + note + " and octave " + this.octave);
            return
        }

        if (voice.isPlaying()) {
            return;
        }

        voice.play(this.waveshaperNode.waveshaperNode, this.waveform);

        // noise always plays behind voice
        //this.noiseOsc.play();
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
            //this.noiseOsc.stop();
        }
    }

    setGain(newGain : number){
        this.masterGainNode.gain.value = newGain;
    }

    setFilterType(newType : BiquadFilterType) {
        for (var i = 0; i < this.voices.length; i++) {
            this.voices[i].filterNode.type = newType;
        }
    }

    setFilterFreq(newFreq : number) {
        for (var i = 0; i < this.voices.length; i++) {
            this.voices[i].filterNode.frequency.value = newFreq;
        }
    }

    setFilterQ(newQ : number) {
        for (var i = 0; i < this.voices.length; i++) {
            this.voices[i].filterNode.Q.value = newQ;
        }
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
        //this.noiseOsc.setGain(newGain);
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