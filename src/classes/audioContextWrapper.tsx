import notes, { getNoteArray } from "../data/notes";
import masterGainNode from "./masterGainNode";
import filterNode from "./filterNode";
import OscillatorWrapper from "./OscillatorWrapper"

class AudioContextWrapper {
    audioContext : AudioContext
    masterGainNode : GainNode
    filterNode : BiquadFilterNode
    oscilators: OscillatorWrapper[]

    constructor(defaultGain : number, defaultFilterType : string, defaultFilterFreq : number){
        this.audioContext = new window.AudioContext();
        this.masterGainNode = masterGainNode(this.audioContext, defaultGain);
        this.filterNode = filterNode(this.audioContext, defaultFilterType, defaultFilterFreq);

        this.filterNode.connect(this.masterGainNode);
        this.masterGainNode.connect(this.audioContext.destination);

        this.oscilators = getNoteArray().map(
            note => new OscillatorWrapper(
                note.noteName,
                note.octave, 
                this.audioContext)
            )
    }

    playNote(note : string, octave : number, wave : OscillatorType){
        const oscWrapper = this.oscilators.find(osc => osc.octave == octave && osc.note == note);
        if(!oscWrapper){
            return
        }
        oscWrapper.play(this.filterNode, wave)
    }

    stopNote(note : string, octave : number){
        const oscWrapper = this.oscilators.find(osc => osc.octave == octave && osc.note == note);
        if(!oscWrapper){
            return
        }
        oscWrapper.stop();
    }

    setGain(newGain : number){
        this.masterGainNode.gain.value = newGain;
    }

    setFilterType(newType : string) {
        this.filterNode.type = newType as BiquadFilterType;
    }

    setFilterFreq(newFreq : number) {
        this.filterNode.frequency.value = newFreq;
    }
}

export default AudioContextWrapper;