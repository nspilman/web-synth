
export enum envelopeActionTypes {
    SET_ATTACK = "SET_ATTACK",
    SET_DECAY = "SET_DECAY",
    SET_RELEASE = "SET_RELEASE",
    SET_SUSTAIN = "SET_SUSTAIN"
}

export enum filterActionTypes {
    SET_FREQ = "SET_FREQ",
    SET_Q = "SET_Q",
    SET_TYPE = "SET_TYPE"
}

export enum oscillatorActionTypes {
    SET_DETUNE = "SET_DETUNE",
    SET_NOISE = "SET_NOISE",
    SET_COUNT = "SET_COUNT"
}

export enum basicActionTypes {
    SET_DISTORTION = "SET_DISTORTION",
    SET_GAIN = "SET_GAIN",
    SET_OCTAVE = "SET_OCTAVE",
    SET_WAVEFORM = "SET_WAVEFORM"
}

interface IAudioControllerAction<T> {
    readonly type: envelopeActionTypes | filterActionTypes | oscillatorActionTypes | basicActionTypes;
    payload: T,
    setAudioController : (payload : T ) => void;
}

export type AudioControllerAction =
| IAudioControllerAction<number | OscillatorType | BiquadFilterType>