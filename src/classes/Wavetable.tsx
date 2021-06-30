import Fourier from "../dsp/Fourier";

export default class Wavetable {
    real: number[] | Float32Array;
    imag: number[] | Float32Array;

    constructor(
        real: number[] | Float32Array,
        imag: number[] | Float32Array
    ) {
        this.real = real;
        this.imag = imag;
    }

    static fromAudioBuffer(audioBuffer: AudioBuffer) {
        var result = Fourier.forward(audioBuffer);
        var wavetable = new Wavetable(result.realBuffer, result.imagBuffer);
        return wavetable;
    }

    static createEmpty() {
        return new Wavetable([0], [0]);
    }

    getPeriodicWave(audioContext: AudioContext) {
        return audioContext.createPeriodicWave(this.real, this.imag);
    }
}
