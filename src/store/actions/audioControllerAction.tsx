import audioContextService from "../../services/audioContextService";

export enum envelopeActionTypes {
    SET_ATTACK = "ENV_SET_ATTACK",
    SET_DECAY = "ENV_SET_DECAY",
    SET_RELEASE = "ENV_SET_RELEASE",
    SET_SUSTAIN = "ENV_SET_SUSTAIN"
}

export enum filterActionTypes {
    SET_FREQ = "FILTER_SET_FREQ",
    SET_Q = "FILTER_SET_Q",
    SET_TYPE = "FILTER_SET_TYPE"
}

export enum oscillatorActionTypes {
    SET_DETUNE = "OSC_SET_DETUNE",
    SET_NOISE = "OSC_SET_NOISE",
    SET_COUNT = "OSC_SET_COUNT"
}

export enum basicActionTypes {
    SET_DISTORTION = "BASIC_SET_DISTORTION",
    SET_GAIN = "BASIC_SET_GAIN",
    SET_OCTAVE = "BASIC_SET_OCTAVE",
    SET_WAVEFORM = "BASIC_SET_WAVEFORM"
}

interface IAudioControllerAction<T> {
    readonly type: envelopeActionTypes | filterActionTypes | oscillatorActionTypes | basicActionTypes;
    payload: T,
    setAudioController : (payload : T ) => void;
}

const audioContext = audioContextService.getInstance();

export const createSetOctave = (newOctave : number) : AudioControllerAction => {
    return {
        type: basicActionTypes.SET_OCTAVE,
        payload: newOctave,
        setAudioController: () => audioContext.setOctave(newOctave),
    }
}

export const createSetGain = (newGain : number ) : AudioControllerAction => {
    return {
        type: basicActionTypes.SET_GAIN,
        payload: newGain,
        setAudioController: () => audioContext.setGain(newGain),
    }
}

export const createSetFilterType = (newType : BiquadFilterType) : AudioControllerAction =>{
    return {
        type: filterActionTypes.SET_TYPE,
        payload: newType,
        setAudioController: () => audioContext.setFilterType(newType),
    }
}

export const createSetFilterFreq = (newFreq : number) : AudioControllerAction =>{
    return {
        type: filterActionTypes.SET_FREQ,
        payload: newFreq,
        setAudioController: () => audioContext.setFilterFreq(newFreq),
    }
}

export const createSetFilterQ = (newQ : number) : AudioControllerAction =>{
    return {
        type: filterActionTypes.SET_TYPE,
        payload: newQ,
        setAudioController: () => audioContext.setFilterQ(newQ),
    }
}

export const createSetOscDetune = (newDetune : number) : AudioControllerAction => {
    return {
        type: oscillatorActionTypes.SET_DETUNE,
        payload: newDetune,
        setAudioController: () => audioContext.setOscillatorUnisonDetune(newDetune),
    }
}

export const createSetNoise = (newNoise: number) : AudioControllerAction => {
    return {
        type: oscillatorActionTypes.SET_NOISE,
        payload: newNoise,
        setAudioController: () => audioContext.setNoiseGain(newNoise),
    }
}

export const createSetOscCount = (newCount : number) : AudioControllerAction => {
    return {
        type: oscillatorActionTypes.SET_COUNT,
        payload: newCount,
        setAudioController: () => audioContext.setNumOscillators(newCount),
    }
}

export const createSetAttackMs = (newAttack : number) : AudioControllerAction =>
{
    return {
        type: envelopeActionTypes.SET_ATTACK,
        payload: newAttack,
        setAudioController: () => audioContext.setAttackMs(newAttack),
    }
}

export const createSetDecayMs = (newDecay : number) : AudioControllerAction =>
{
    return {
        type: envelopeActionTypes.SET_DECAY,
        payload: newDecay,
        setAudioController: () => audioContext.setDecayMs(newDecay),
    }
}

export const createSetSustain = (newSustain : number) =>
{
    return {
        type: envelopeActionTypes.SET_SUSTAIN,
        payload: newSustain,
        setAudioController: () => audioContext.setDecayMs(newSustain),
    }
}

export const createSetRelease = (newRelease : number) =>
{
    return {
        type: envelopeActionTypes.SET_RELEASE,
        payload: newRelease,
        setAudioController: () => audioContext.setDecayMs(newRelease),
    }
}

export const createSetDistortion = (newDistortion : number) => {
    return {
    type: basicActionTypes.SET_DISTORTION,
    payload: newDistortion,
    setAudioController: () => audioContext.setDistortionAmount(newDistortion),
}
}

export const createSetWave = (newWave : OscillatorType) => {
    return {
        type: basicActionTypes.SET_WAVEFORM,
        payload: newWave,
        setAudioController: () => audioContext.setWaveform(newWave)
    }
}

export type AudioControllerAction =
| IAudioControllerAction<number | OscillatorType | BiquadFilterType>