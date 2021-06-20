import audioContextService from "../../services/audioContextService";
import { AudioControllerAction } from ".";
import waveforms, { getWave } from "../../data/waveforms";

const audioContext = audioContextService.getInstance();

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
    setAudioController: () => audioContext.setOctave(newOctave),
  };
};

export const createSetGain = (newGain: number): AudioControllerAction => {
  return {
    type: basicActionTypes.SET_GAIN,
    payload: newGain,
    setAudioController: () => audioContext.setGain(newGain),
  };
};

export const createSetDistortion = (
  newDistortion: number
): AudioControllerAction => {
  return {
    type: basicActionTypes.SET_DISTORTION,
    payload: newDistortion,
    setAudioController: () => audioContext.setDistortionAmount(newDistortion),
  };
};

export const createSetWave = (newWaveId: waveforms): AudioControllerAction => {
  const newWave: OscillatorType = getWave(newWaveId);
  return {
    type: basicActionTypes.SET_WAVEFORM,
    payload: newWaveId,
    setAudioController: () => audioContext.setWaveform(newWave),
  };
};
