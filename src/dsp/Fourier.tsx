import { transform } from "../external/fft";
import Window from "./Window";

class FourierResult {
    realBuffer: Float32Array = new Float32Array();
    imagBuffer: Float32Array = new Float32Array();
    sampleRate: number = 44100;
    numSamples: number = 1;

    getMagnitudeAtBin(bin: number) {
        return Math.sqrt(Math.pow(this.realBuffer[bin], 2) + Math.pow(this.imagBuffer[bin], 2));
    }

    getFrequencyForBin(bin: number) {
        var freqResolution = this.sampleRate / this.numSamples;
        return freqResolution * bin;
    }
}

class Fourier {
    /*
     * Performs forward FFT on an AudioBuffer. 
     * Returns FourierResult with real and imaginary components.
     */
    static forward(input: AudioBuffer) {
        var result = new FourierResult();
        result.sampleRate = input.sampleRate;
        result.numSamples = input.length;

        console.log("Running FFT with params: ");
        console.log("\tSample rate: " + result.sampleRate);
        console.log("\tMax frequency by Nyquist: " + result.sampleRate / 2);
        console.log("\tNum samples: " + result.numSamples);
        console.log("\tFrequency resolution: " + (result.sampleRate / result.numSamples) + "Hz");

        // create real and imaginary output buffers
        var imagBuffer = new Float64Array(input.length);

        // always use first channel
        var channel0Float32Buffer = new Float32Array(input.length);
        input.copyFromChannel(channel0Float32Buffer, 0);

        // TODO: trim audio

        // window the signal to remove effects of irreglar start and end of audio
        Window.hamming(channel0Float32Buffer);

        var realBuffer = new Float64Array(channel0Float32Buffer);

        // run FFT
        transform(realBuffer, imagBuffer);

        result.realBuffer = new Float32Array(realBuffer);
        result.imagBuffer = new Float32Array(imagBuffer);

        return result;
    }
}

export { Fourier, FourierResult }