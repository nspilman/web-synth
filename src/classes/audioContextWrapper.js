import notes from "../data/notes";
import waveforms from "../data/waveforms";
import masterGainNode from "./masterGainNode";

class AudioContextWrapper {
    // audioContext : AudioContext
    // masterGainNode : any

    constructor(){//AudioContext){
        this.audioContext = new window.AudioContext();
        this.masterGainNode = masterGainNode(this.audioContext, 3)
        this.currentlyPlayingNotes = [];
    }

    playNote(note, octave){
        let osc = this.audioContext.createOscillator();
        osc.connect(this.masterGainNode);
        const noteToPlay = notes[note][octave]
        osc.type = waveforms.SINE;
        osc.frequency.value = noteToPlay;
        this.currentlyPlayingNotes.push({osc, note, octave})
        osc.start()
        console.log(this.currentlyPlayingNotes)
    }

    stopNote(note, octave){
        const osc = this.currentlyPlayingNotes.find((osc)=> osc.note == note && osc.octave == octave )
        console.log(osc);
        if(osc){
            osc.osc.stop();
        }
        this.currentlyPlayingNotes = this.currentlyPlayingNotes.filter((osc) => osc.note != note || osc.octave != octave );
    }
}

export default AudioContextWrapper;