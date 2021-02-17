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

    constructor(initialGain : number, initialFilterType: string, initialFilterFrequency: number){
        this.audioContext = new window.AudioContext();
        this.nodes = []
        this.initSignalChain(initialGain, initialFilterType, initialFilterFrequency);
        this.currentlyPlayingNotes = [];
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

    initSignalChain(initialGain: number, initialFilterType: string, initialFilterFrequency: number) {
        this.nodes = [
            this.createFilter(initialFilterType, initialFilterFrequency),
            this.createGain(initialGain)
        ];

        for (var i = 0; i < this.nodes.length - 1; i++) {
            this.nodes[i].connect(this.nodes[i + 1]);
        }

        this.nodes[this.nodes.length - 1].connect(this.audioContext.destination);
    }

    createFilter(initialFilterType: string, initialFilterFrequency: number) {
        var filterNode = this.audioContext.createBiquadFilter();
        filterNode.type = initialFilterType as BiquadFilterType;
        filterNode.frequency.setValueAtTime(initialFilterFrequency, this.audioContext.currentTime);
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

    setFilterType(newFilterType: string) {
        (this.nodes[0] as BiquadFilterNode).type = newFilterType as BiquadFilterType;
    }

    setFilterFrequency(newFilterFrequency: number) {
        (this.nodes[0] as BiquadFilterNode).frequency.value = newFilterFrequency;
    }
}

export default AudioContextWrapper;