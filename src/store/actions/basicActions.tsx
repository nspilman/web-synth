import { AudioControllerAction } from ".";
import waveforms, { getWave } from "../../data/waveforms";

export enum basicActionTypes {
  SET_DISTORTION = "BASIC_SET_DISTORTION",
  SET_GAIN = "BASIC_SET_GAIN",
  SET_OCTAVE = "BASIC_SET_OCTAVE",
  SET_WAVEFORM = "BASIC_SET_WAVEFORM",
}

export const createSetOctave = (newOctave: number): AudioControllerAction => {
  return {
    type: basicActionTypes.SET_OCTAVE,
    payload: newOctave,
  };
};

export const createSetGain = (newGain: number): AudioControllerAction => {
  return {
    type: basicActionTypes.SET_GAIN,
    payload: newGain,
  };
};

export const createSetDistortion = (
  newDistortion: number
): AudioControllerAction => {
  return {
    type: basicActionTypes.SET_DISTORTION,
    payload: newDistortion,
  };
};

export const createSetWave = (newWaveId: waveforms): AudioControllerAction => {
  const newWave: OscillatorType = getWave(newWaveId);
  return {
    type: basicActionTypes.SET_WAVEFORM,
    payload: newWaveId,
  };
};
