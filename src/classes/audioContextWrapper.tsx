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

    setGain(newGain : number){
        this.masterGainNode.gain.value = newGain;
    }
}

export default AudioContextWrapper;