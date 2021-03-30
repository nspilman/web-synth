import IDialControlParameters from "../interfaces/IDailControlParameters"
import { maxFilterTypeDialValue } from "./filterTypes";
import waveforms, { maxWaveformsDialValue } from "./waveforms";

function createParametersObject(
    min: number,
    max: number,
    title: string,
    factor : number = 1
     ) : IDialControlParameters{
         return {
             min,
             max,
             title, 
             factor
         }
}

export const gainParameters = createParametersObject(
    0,
    1,
    "GAIN",
    10
)

export const octaveParameters = createParametersObject(
    0,
    8,
    "OCTAVE",
)

export const waveParameters = createParametersObject(
    0,
    maxWaveformsDialValue,
    "WAVE",
)

export const envelopeAttackParameters = createParametersObject(
    1,
    2000,
    "ATTACK",
)

export const envelopeDecayParameters = createParametersObject(
    1,
    2000,
    "DECAY",
) 

export const envelopeSustainParameters  = createParametersObject(
    0,
    1,
    "SUSTAIN",
    1000
)

export const envelopeReleaseParameters  = createParametersObject(
    0,
    2000,
    "RELEASE",
)

export const filterFrequencyParameters = createParametersObject(
    40,
    20000,
    "FREQUENCY",
)

export const filterQParameters = createParametersObject(
    0.01,
    20,
    "Q",
    100
)

export const oscDetuneParameters = createParametersObject(
    0,
    100,
    "UNISON DETUNE",
)

export const filterTypeParameters = createParametersObject(
    0,
    maxFilterTypeDialValue,
    "FILTER",
)

export const oscCountParameters = createParametersObject(
    1,
    2,
    "OSCILLATORS",
)

export const noiseLevelParameters = createParametersObject(
    0,
    1,
    "NOISE GAIN",
    100
)

export const distortionParameters = createParametersObject(
    0,
    10,
    "DISTORTION",
)

export default [ 
    envelopeAttackParameters, 
    envelopeDecayParameters, 
    envelopeSustainParameters, 
    envelopeReleaseParameters,
    filterFrequencyParameters,
    filterQParameters,
    oscDetuneParameters,
    noiseLevelParameters,
    distortionParameters
 ]