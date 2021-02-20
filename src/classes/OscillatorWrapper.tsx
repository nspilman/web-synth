import { getFrequency } from "../data/notes";

export default class OscillatorWrapper {
    isPlaying: boolean
    frequency: number
    note: string
    octave: number
    playingOsc?: OscillatorNode
    audioContext: AudioContext

    constructor(note: string,
        octave: number,
        audioContext: AudioContext) {
        this.isPlaying = false;
        this.note = note;
        this.octave = octave;
        this.frequency = getFrequency(note, octave);
        this.audioContext = audioContext;
    }

    play(nodeToConnect: AudioNode, wave: OscillatorType) {
        if(!this.playingOsc){
            const osc = this.audioContext.createOscillator();
            osc.frequency.value = this.frequency;
            osc.connect(nodeToConnect);
            osc.type = wave;
            this.playingOsc = osc;
            this.playingOsc.start()
        }
    }

    stop() {
        this.playingOsc?.stop();
        this.playingOsc?.disconnect();
        this.playingOsc = undefined;
    }
}