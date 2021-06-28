export default class Wavetable {
    real: number[];
    imag: number[];

    constructor(
        real: number[],
        imag: number[]
    ) {
        this.real = real;
        this.imag = imag;
    }

    static fromTimeData(sampleRate: number, timeData: number[]) {
        // TODO: FFT on timeseries to get real / imag components
        return new Wavetable([0, 1], [0, 0]);
    }

    static createEmpty() {
        return new Wavetable([0], [0]);
    }

    getPeriodicWave(audioContext: AudioContext) {
        return audioContext.createPeriodicWave(this.real, this.imag);
    }
}
