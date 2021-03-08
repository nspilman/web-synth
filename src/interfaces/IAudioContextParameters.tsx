import IEnvelopeParameters from "./IEnvelopeParameters";
import IFilterParameters from "./IFilterParameters";
import IOscillatorParameters from "./IOscillatorParameters";

export default interface IAudioContextParameters {
    gain : number,
    waveForm : OscillatorType
    octave : number,
    distortionAmount: number,
    noiseGain: number,
    filterParameters: IFilterParameters,
    oscillatorParameters: IOscillatorParameters,
    envelopeParameters: IEnvelopeParameters
}