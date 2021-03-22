import IDialControlParameters from "../interfaces/IDailControlParameters"
import getDefaultContextWrapperValues from "../hooks/getDefaultContextWrapperValues";

const defaultValues = getDefaultContextWrapperValues();

function createParametersObject(
    min: number,
    max: number,
    title: string,
    localStorageKey: string,
    defaultValue : number,
    factor : number = 1
     ) : IDialControlParameters{
         return {
             min,
             max,
             title, localStorageKey,
             defaultValue,
             factor
         }
}

export const envelopeAttackParameters = createParametersObject(
    1,
    2000,
    "ATTACK",
    "envelopeAttackMs",
    defaultValues.envelopeParameters.decayMs,
)

export const envelopeDecayParameters = createParametersObject(
    1,
    2000,
    "DECAY",
    "envelopeDecayMs",
    defaultValues.envelopeParameters.decayMs,
) 

export const envelopeSustainParameters  = createParametersObject(
    0,
    1000,
    "SUSTAIN",
    "envelopeSustainMs",
    defaultValues.envelopeParameters.sustain
)

export const envelopeReleaseParameters  = createParametersObject(
    0,
    2000,
    "RELEASE",
    "envelopeReleaseMs",
    defaultValues.envelopeParameters.releaseMs
)

export const filterFrequencyParameters = createParametersObject(
    40,
    20000,
    "FREQUENCY",
    "filterFrequency",
    defaultValues.filterParameters.freq
)

export const filterQParameters = createParametersObject(
    1,
    20000,
    "Q",
    "filterQ",
    defaultValues.filterParameters.q,
    1000
)

export const oscDetuneParameters = createParametersObject(
    0,
    100,
    "UNISON DETUNE",
    "oscUnisonDetune",
    defaultValues.oscillatorParameters.oscillatorUnisonDetune
)

export const noiseLevelParameters = createParametersObject(
    0,
    100,
    "NOISE GAIN",
    "noiseGain",
    defaultValues.noiseGain,
    100
)

export const distortionParameters = createParametersObject(
    0,
    10,
    "DISTORTION",
    "distortion",
    defaultValues.distortionAmount,
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
    distortionParameters ]