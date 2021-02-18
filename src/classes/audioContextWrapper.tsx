import notes, { getNoteArray } from "../data/notes";
import masterGainNode from "./masterGainNode";
import OscillatorWrapper from "./OscillatorWrapper"

class AudioContextWrapper {
    audioContext : AudioContext
    masterGainNode : GainNode
    oscilators: OscillatorWrapper[]

    constructor(defaultGain : number){
        this.audioContext = new window.AudioContext();
        this.masterGainNode = masterGainNode(this.audioContext, defaultGain)
        this.oscilators = getNoteArray().map(
            note => new OscillatorWrapper(
                note.noteName,
                note.octave, 
                this.audioContext                )
            )
    }

    playNote(note : string, octave : number, wave : OscillatorType){
        const oscWrapper = this.oscilators.find(osc => osc.octave == octave && osc.note == note);
        if(!oscWrapper){
            return
        }
        oscWrapper.play(this.masterGainNode, wave)
    }

    stopNote(note : string, octave : number){
        const oscWrapper = this.oscilators.find(osc => osc.octave == octave && osc.note == note);
        if(!oscWrapper){
            return
        }
        oscWrapper.stop();
    }

    createFilter(initialFilterType: string, initialFilterFrequency: number) {
        this.filterNode = this.audioContext.createBiquadFilter();
        this.filterNode.type = initialFilterType as BiquadFilterType;
        this.filterNode.frequency.value = initialFilterFrequency;
    }

    createGain(initialGain: number) {
        this.gainNode = this.audioContext.createGain();
        this.gainNode.gain.value = initialGain;
        this.gainNode;
    }

    setGain(newGain : number){
        (this.gainNode as GainNode).gain.value = newGain;
    }

    setFilterType(newFilterType: string) {
        (this.nodes[0] as BiquadFilterNode).type = newFilterType as BiquadFilterType;
    }

    setFilterFrequency(newFilterFrequency: number) {
        (this.nodes[0] as BiquadFilterNode).frequency.value = newFilterFrequency;
    }
}

export default AudioContextWrapper;