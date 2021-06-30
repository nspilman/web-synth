import { transform } from "../external/fft";

class FourierResult {
    realBuffer: Float32Array;
    imagBuffer: Float32Array;

    constructor(realBuffer: Float32Array, imagBuffer: Float32Array) {
        this.realBuffer = realBuffer;
        this.imagBuffer = imagBuffer;
    }
}

export default class Fourier {
    /*
     * Performs forward FFT on an AudioBuffer. 
     * Returns FourierResult with real and imaginary components.
     */
    static forward(input: AudioBuffer) {
        const sampleRate = input.sampleRate;
        const maxFreq = input.sampleRate / 2;
        const numSamples = input.length;
        const freqResolution = input.sampleRate / input.length;

        console.log("Running FFT with params: ");
        console.log("\tSample rate: " + sampleRate);
        console.log("\tMax frequency by Nyquist: " + maxFreq);
        console.log("\tNum samples: " + numSamples);
        console.log("\tFrequency resolution: " + freqResolution + "Hz");

        // create real and imaginary output buffers
        var imagBuffer = new Float64Array(input.length);

        // always use first channel
        var channel0Float32Buffer = new Float32Array(input.length);
        input.copyFromChannel(channel0Float32Buffer, 0);
        var realBuffer = new Float64Array(channel0Float32Buffer);

        // run FFT
        transform(realBuffer, imagBuffer);

        return new FourierResult(new Float32Array(realBuffer), new Float32Array(imagBuffer));
    }
}