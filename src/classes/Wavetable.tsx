export default class Wavetable {
    real: Float32Array;
    imag: Float32Array;

    constructor(
        real: Float32Array,
        imag: Float32Array
    ) {
        this.real = real;
        this.imag = imag;
    }

    static fromTimeseries(timeseries: Float32Array) {
        // TODO: FFT on timeseries to get real / imag components
    }

    static createSine() {
        var real = new Float32Array(2);
        var imag = new Float32Array(2);

        real[0] = 0;
        imag[0] = 0
        real[1] = 1;
        imag[1] = 0;

        return new Wavetable(real, imag);
    }

    getPeriodicWave(audioContext: AudioContext) {
        return audioContext.createPeriodicWave(this.real, this.imag);
    }
}