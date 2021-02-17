import notes from "../data/notes";
import masterGainNode from "./masterGainNode";

interface PlayingNote {
    osc: OscillatorNode,
    note: string,
    octave: number
}

class AudioContextWrapper {
    audioContext : AudioContext
    masterGainNode : GainNode
    currentlyPlayingNotes: PlayingNote[]

    constructor(initialGain : number){
        this.audioContext = new window.AudioContext();
        this.masterGainNode = masterGainNode(this.audioContext, initialGain)
        this.currentlyPlayingNotes = [];
    }

    playNote(note : string, octave : number, wave : OscillatorType){
        let osc = this.audioContext.createOscillator();
        osc.connect(this.masterGainNode);
        const noteToPlay = notes[note][octave]
        osc.type = wave;
        osc.frequency.value = noteToPlay;
        this.currentlyPlayingNotes.push({osc, note, octave})
        osc.start()
    }

    stopNote(note : string, octave : number){
        const oscToStop = this.currentlyPlayingNotes.find((osc)=> osc.note == note && osc.octave == octave )
        if(oscToStop){
            oscToStop.osc.stop();
        }
        this.currentlyPlayingNotes = this.currentlyPlayingNotes.filter((osc) => osc.note != note || osc.octave != octave );
    }

    setGain(newGain : number){
        this.masterGainNode.gain.value = newGain;
    }
}

export default AudioContextWrapper;