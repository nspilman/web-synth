import notes from "../data/notes";
import masterGainNode from "./masterGainNode";

class AudioContextWrapper {
    // audioContext : AudioContext
    // masterGainNode : any

    constructor(){//AudioContext){
        this.audioContext = new window.AudioContext();
        this.masterGainNode = masterGainNode(this.audioContext, 3)
        this.currentlyPlayingNotes = [];
    }

    playNote(note, octave, wave){
        let osc = this.audioContext.createOscillator();
        osc.connect(this.masterGainNode);
        const noteToPlay = notes[note][octave]
        osc.type = wave;
        osc.frequency.value = noteToPlay;
        this.currentlyPlayingNotes.push({osc, note, octave})
        osc.start()
    }

    stopNote(note, octave){
        const oscToStop = this.currentlyPlayingNotes.find((osc)=> osc.note == note && osc.octave == octave )
        if(oscToStop){
            oscToStop.osc.stop();
        }
        this.currentlyPlayingNotes = this.currentlyPlayingNotes.filter((osc) => osc.note != note || osc.octave != octave );
    }
}

export default AudioContextWrapper;