import { AudioControllerAction } from ".";
import audioContextService from "../../services/audioContextService";

const audioContext = audioContextService.getInstance();

export enum oscillatorActionTypes {
    SET_DETUNE = "OSC_SET_DETUNE",
    SET_NOISE = "OSC_SET_NOISE",
    SET_COUNT = "OSC_SET_COUNT"
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