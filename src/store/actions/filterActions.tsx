import audioContextService from "../../services/audioContextService";
import { AudioControllerAction } from ".";

const audioContext = audioContextService.getInstance();

export enum filterActionTypes {
    SET_FREQ = "FILTER_SET_FREQ",
    SET_Q = "FILTER_SET_Q",
    SET_TYPE = "FILTER_SET_TYPE"
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