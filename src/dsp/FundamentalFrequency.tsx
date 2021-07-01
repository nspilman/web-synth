import { FourierResult } from "./Fourier";

export default class FundamentalFrequency {
    /*
     * Calculates fundamental frequency by finding the frequency with the highest magnitude.
     * Returns [bin_index, magnitude]
     */
    static calculateFundamentalAlgo1(result: FourierResult) {
        var maxFreqBin = result.numSamples / 2;
        var maxBin = -1;
        var maxMagnitude = -1;
        for (var i = 0; i < maxFreqBin; i++) {
            var magnitude = result.getMagnitudeAtBin(i);
            if (magnitude > maxMagnitude) {
                maxMagnitude = magnitude;
                maxBin = i;
            }
        }

        return [maxBin, maxMagnitude];
    }

    /*
     * Calculates fundamental frequency by:
     *   - Find the top K frequency bins by magnitude
     *   - Find the spacing (∆frequency) between the top K frequency bins
     *   - Find the most common ∆frequency
     * 
     * Returns [bin_index, magnitude]
     */
    static calculateFundamentalAlgo2(result: FourierResult) {
        // TODO
    }
}