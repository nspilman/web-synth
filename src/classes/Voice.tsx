import { getFrequency } from "../data/notes";

export default class Voice {
    numPlayingOscillators: number
    frequency: number
    note: string
    octave: number
    oscillators: OscillatorNode[]
    numOscillators: number
    detune: number
    audioContext: AudioContext

    constructor(note: string,
        octave: number,
        numOscillators: number,
        unisonDetune: number,
        audioContext: AudioContext) {
        this.audioContext = audioContext;
        this.numPlayingOscillators = 0;
        this.oscillators = [this.audioContext.createOscillator(), this.audioContext.createOscillator()];
        this.note = note;
        this.octave = octave;
        this.numOscillators = numOscillators;
        this.frequency = getFrequency(note, octave);
        this.detune = unisonDetune;
    }

    play(nodeToConnect: AudioNode, wave: OscillatorType) {
        if (this.numPlayingOscillators != 0) {
            return;
        }

        for (var i = 0; i < this.numOscillators; i++) {
            const osc = this.audioContext.createOscillator();
            osc.frequency.value = this.frequency;
            osc.connect(nodeToConnect);
            osc.type = wave;
            osc.detune.value = this.getDetuneVal(i, this.detune);
            console.log(osc.detune.value);
            osc.start();
            this.oscillators[i] = osc;
        }

        this.numPlayingOscillators = this.numOscillators;
    }

    stop() {
        if (this.numPlayingOscillators == 0) {
            return;
        }

        for (var i = 0; i < this.numPlayingOscillators; i++) {
            const osc = this.oscillators[i];
            osc?.stop();
            osc?.disconnect();
        }
        
        this.numPlayingOscillators = 0;
    }

    setDetune(detune: number) {
        this.detune = detune;
        for (var i = 0; i < this.numPlayingOscillators; i++) {
            this.oscillators[i].detune.value = this.getDetuneVal(i, this.detune);
        }
    }

    setNumOscillators(newNum: number) {
        this.numOscillators = newNum;
    }

    getDetuneVal(oscIndex: number, detune: number) {
        return (oscIndex % 2 == 0) ? detune : -detune;
    }
}