import audioContextService from "../../services/audioContextService";
import { AudioControllerAction } from ".";
import { getFilterType } from "../../data/filterTypes";

const audioContext = audioContextService.getInstance();

export enum filterActionTypes {
  SET_FREQ = "FILTER_SET_FREQ",
  SET_Q = "FILTER_SET_Q",
  SET_TYPE = "FILTER_SET_TYPE",
}

export const createSetFilterType = (
  newTypeId: number
): AudioControllerAction => {
  const newType = getFilterType(newTypeId);
  return {
    type: filterActionTypes.SET_TYPE,
    payload: newTypeId,
    setAudioController: () => audioContext.setFilterType(newType),
  };
};

export const createSetFilterFreq = (newFreq: number): AudioControllerAction => {
  return {
    type: filterActionTypes.SET_FREQ,
    payload: newFreq,
    setAudioController: () => audioContext.setFilterFreq(newFreq),
  };
};

export const createSetFilterQ = (newQ: number): AudioControllerAction => {
  return {
    type: filterActionTypes.SET_Q,
    payload: newQ,
    setAudioController: () => audioContext.setFilterQ(newQ),
  };
};
