import { AudioControllerAction } from "../actions";
import { basicActionTypes } from "../actions/basicActions";
import getDefaultContextWrapperValues from "../../hooks/getDefaultContextWrapperValues";
import IAudioContextParameters from "../../interfaces/IAudioContextParameters";

type BasicState = {
  distortion: number;
  gain: number;
  octave: number;
  waveformId: number;
};

const { gain, distortion, octave, waveformId }: IAudioContextParameters =
  getDefaultContextWrapperValues();

const initialState: BasicState = {
  gain,
  distortion,
  octave,
  waveformId,
};
const BasicReducer = (
  state: BasicState = initialState,
  action: AudioControllerAction
) => {
  switch (action.type) {
    case basicActionTypes.SET_DISTORTION:
      return {
        ...state,
        distortion: action.payload,
      };
    case basicActionTypes.SET_WAVEFORM:
      return {
        ...state,
        waveformId: action.payload,
      };
    case basicActionTypes.SET_OCTAVE:
      return {
        ...state,
        octave: action.payload,
      };
    case basicActionTypes.SET_GAIN:
      return {
        ...state,
        gain: action.payload,
      };
    default:
      return state;
  }
};
export default BasicReducer;
