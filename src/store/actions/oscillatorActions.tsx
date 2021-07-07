import { AudioControllerAction } from ".";

export enum oscillatorActionTypes {
  SET_DETUNE = "OSC_SET_DETUNE",
  SET_NOISE = "OSC_SET_NOISE",
  SET_COUNT = "OSC_SET_COUNT",
}

export const createSetOscDetune = (
  newDetune: number
): AudioControllerAction => {
  return {
    type: oscillatorActionTypes.SET_DETUNE,
    payload: newDetune,
  };
};

export const createSetNoise = (newNoise: number): AudioControllerAction => {
  return {
    type: oscillatorActionTypes.SET_NOISE,
    payload: newNoise,
  };
};

export const createSetOscCount = (newCount: number): AudioControllerAction => {
  return {
    type: oscillatorActionTypes.SET_COUNT,
    payload: newCount,
  };
};
