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
    static forward(input: AudioBuffer, trim: boolean, window: boolean) {
        // always use first channel
        // TODO: sum all channels?
        var inputBuffer = input.getChannelData(0);

        //var lengthToUse = inputBuffer.length;
        var lengthToUse = 8192;
        var realBuffer = new Float32Array(lengthToUse);
        var imagBuffer = new Float32Array(lengthToUse);

        for (var i = 0; i < lengthToUse; i++) {
            realBuffer[i] = inputBuffer[i];
        }

        // subtract out mean
        var sum = 0;
        for (var i = 0; i < realBuffer.length; i++) {
            sum += realBuffer[i];
        }

        var mean = sum / realBuffer.length;
        for (var i = 0; i < realBuffer.length; i++) {
            realBuffer[i] -= mean;
        }

        if (window) {
            // window the signal to remove effects of irreglar start and end of audio
            Window.hamming(realBuffer);
        }

        // run FFT
        console.log("Running FFT with params: ");
        console.log("\tSample rate: " + input.sampleRate);
        console.log("\tMax frequency by Nyquist: " + input.sampleRate / 2);
        console.log("\tNum samples: " + realBuffer.length);
        console.log("\tFrequency resolution: " + (input.sampleRate / realBuffer.length) + "Hz");
        transform(realBuffer, imagBuffer);

        var result = new FourierResult();
        result.realBuffer = realBuffer;
        result.imagBuffer = imagBuffer;
        result.sampleRate = input.sampleRate;
        result.numSamples = realBuffer.length;

        return result;
    }
}

export { Fourier, FourierResult }