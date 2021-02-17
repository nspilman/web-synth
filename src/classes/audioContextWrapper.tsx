import notes from "../data/notes";

interface PlayingNote {
    osc: OscillatorNode,
    note: string,
    octave: number
}

class AudioContextWrapper {
    audioContext : AudioContext
    currentlyPlayingNotes: PlayingNote[]
    nodes: AudioNode[]

    constructor(initialGain : number){
        this.audioContext = new window.AudioContext();
        this.initSignalChain(initialGain);
        this.currentlyPlayingNotes = [];
        this.nodes = []
    }

    playNote(note : string, octave : number, wave : OscillatorType){
        let osc = this.audioContext.createOscillator();
        osc.connect(this.nodes[0]);
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

    initSignalChain(initialGain: number) {
        this.nodes = [
            this.createFilter(),
            this.createGain(initialGain)
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

    createGain(initialGain: number) {
        var gainNode = this.audioContext.createGain();
        gainNode.gain.value = initialGain;
        return gainNode;
    }

    setGain(newGain : number){
        (this.nodes[1] as GainNode).gain.value = newGain;
    }
}

export default AudioContextWrapper;