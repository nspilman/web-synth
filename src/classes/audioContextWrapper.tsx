import { getNoteArray } from "../data/notes";
import masterGainNode from "./masterGainNode";
import filterNode from "./filterNode";
import OscillatorWrapper from "./OscillatorWrapper"
import IAudioContextParameters from "../interfaces/IAudioContextParameters"
import WaveshaperNodeWrapper from "./WaveshaerNodeWrapper";

class AudioContextWrapper {
    audioContext : AudioContext
    masterGainNode : GainNode
    filterNode : BiquadFilterNode
    waveshaperNode : WaveshaperNodeWrapper
    primaryOscillators: OscillatorWrapper[]
    secondaryOscillators: OscillatorWrapper[]
    waveform : OscillatorType
    octave : number
    numOscillators: number
    oscillatorUnisonDetune: number

    constructor(defaultParameters : IAudioContextParameters){
        const { gain, filterType, filterFreq, waveForm, octave, numOscillators, oscillatorUnisonDetune } = defaultParameters
        this.audioContext = new window.AudioContext();

        this.masterGainNode = masterGainNode(this.audioContext, gain);
        this.filterNode = filterNode(this.audioContext, filterType, filterFreq);
        this.waveshaperNode = new WaveshaperNodeWrapper(this.audioContext);

        this.filterNode.connect(this.waveshaperNode.waveshaperNode);
        this.waveshaperNode.waveshaperNode.connect(this.masterGainNode);

        this.masterGainNode.connect(this.audioContext.destination);
        this.waveform = waveForm;
        this.octave = octave;

        this.primaryOscillators = this.getOscillatorWrapperArray();
        this.secondaryOscillators = this.getOscillatorWrapperArray();
        this.numOscillators = numOscillators;
        this.oscillatorUnisonDetune = oscillatorUnisonDetune;
    }

    playNote(note : string){
        const primaryOsc = this.findOscWithNoteAndOctave(this.primaryOscillators, note);
        if (!primaryOsc) {
            console.log("Unable to find primary osc with note " + note + " and octave " + this.octave);
            return
        }

        const secondaryOsc = this.numOscillators == 2 ? this.findOscWithNoteAndOctave(this.secondaryOscillators, note) : undefined;
        if (this.numOscillators == 2 && !secondaryOsc) {
            console.log("Unable to find secondadry osc with note " + note + " and octave " + this.octave);
            return;
        }

        primaryOsc.play(this.filterNode, this.waveform);
        secondaryOsc?.play(this.filterNode, this.waveform);
    }


    stopNote(note : string){
        const primaryOsc = this.findOscWithNoteAndOctave(this.primaryOscillators, note);
        if (!primaryOsc) {
            console.log("Unable to find primary osc with note " + note + " and octave " + this.octave);
            return;
        }

        const secondaryOsc = this.numOscillators == 2 ? this.findOscWithNoteAndOctave(this.secondaryOscillators, note) : undefined;
        if (this.numOscillators == 2 && !secondaryOsc) {
            console.log("Unable to find secondadry osc with note " + note + " and octave " + this.octave);
            return;
        }

        primaryOsc.stop();
        secondaryOsc?.stop();
    }

    setGain(newGain : number){
        this.masterGainNode.gain.value = newGain;
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
        this.numOscillators = newNum;
    }

    setOscillatorUnisonDetune(newDetune: number) {
        this.oscillatorUnisonDetune = newDetune;
        for (var i = 0; i < this.primaryOscillators.length; i++) {
            this.primaryOscillators[i].setDetune(newDetune);
            this.secondaryOscillators[i].setDetune(-newDetune);
        }
    }

    getOscillatorWrapperArray() {
        return getNoteArray().map(
            note => new OscillatorWrapper(
                note.noteName,
                note.octave, 
                this.audioContext)
        );
    }

    findOscWithNoteAndOctave(oscList: OscillatorWrapper[], note: string) {
        return oscList.find(osc => osc.octave == this.octave && osc.note == note);
    }
}

export default AudioContextWrapper;