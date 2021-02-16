import notes from "../data/notes";

class AudioContextWrapper {
    constructor(){//AudioContext){
        this.audioContext = new window.AudioContext();
        this.initSignalChain();
        this.currentlyPlayingNotes = [];
    }

    playNote(note, octave, wave){
        let osc = this.audioContext.createOscillator();
        osc.connect(this.nodes[0]);
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

    initSignalChain() {
        this.nodes = [
            this.createFilter(),
            this.createGain()
        ];

        for (var i = 0; i < this.nodes.length - 1; i++) {
            this.nodes[i].connect(this.nodes[i + 1]);
        }

        this.nodes[this.nodes.length - 1].connect(this.audioContext.destination);
    }

    createFilter() {
        var filterNode = this.audioContext.createBiquadFilter();
        filterNode.type = "lowpass";
        filterNode.frequency.setValueAtTime(80, this.audioContext.currentTime);
        return filterNode;
    }

    createGain() {
        var gainNode = this.audioContext.createGain();
        gainNode.gain.value = 3;
        return gainNode;
    }
}

export default AudioContextWrapper;