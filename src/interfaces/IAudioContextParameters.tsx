import waveforms from "../data/waveforms";
import IEnvelopeParameters from "./IEnvelopeParameters";
import IFilterParameters from "./IFilterParameters";
import IOscillatorParameters from "./IOscillatorParameters";

export default interface IAudioContextParameters {
    gain : number,
    waveform : waveforms
    octave : number,
    distortion: number,
    noiseGain: number,
    filterParameters: IFilterParameters,
    oscillatorParameters: IOscillatorParameters,
    envelopeParameters: IEnvelopeParameters
}