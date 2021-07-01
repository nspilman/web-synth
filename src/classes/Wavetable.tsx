import { Fourier } from "../dsp/Fourier";
import FundamentalFrequency from "../dsp/FundamentalFrequency";

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
        // calculate FFT
        var result = Fourier.forward(audioBuffer);
        
        // find fundamental frequency bin
        var fundamentalBinIndex;
        var fundamentalMagnitude;
        [fundamentalBinIndex, fundamentalMagnitude] = FundamentalFrequency.calculateFundamentalAlgo1(result);
        console.log("Fundamental frequency is: " + result.getFrequencyForBin(fundamentalBinIndex) + "Hz");
        console.log("Fundamental bin is: " + fundamentalBinIndex);

        // shift over result so real[1] and imag[1] correspond to the fundamental frequency
        var newLength = result.numSamples - fundamentalBinIndex;
        var newReal = new Float32Array(newLength + 1);
        var newImag = new Float32Array(newLength + 1);
        newReal[0] = 0;
        newImag[0] = 0;
        for (var i = 1, bin = fundamentalBinIndex; i < newLength + 1; i++, bin++) {
            newReal[i] = result.realBuffer[bin];
            newImag[i] = result.imagBuffer[bin];
        }

        //var wavetable = new Wavetable(result.realBuffer, result.imagBuffer);
        var wavetable = new Wavetable(newReal, newImag);
        return wavetable;
    }

    static createEmpty() {
        return new Wavetable([0], [0]);
    }

    getPeriodicWave(audioContext: AudioContext) {
        return audioContext.createPeriodicWave(this.real, this.imag);
    }
}
