import { oscillatorActionTypes } from "../actions/oscillatorActions";
import { AudioControllerAction } from "../actions";
import IAudioContextParameters from "../../interfaces/IAudioContextParameters";
import getDefaultContextWrapper from "../../hooks/getDefaultContextWrapperValues";

type OscillatorState = {
  detune: number;
  noiseGain: number;
  count: number;
};

const { noiseGain, oscillatorParameters }: IAudioContextParameters =
  getDefaultContextWrapper();
const { oscillatorUnisonDetune, numOscillators } = oscillatorParameters;

const initialState: OscillatorState = {
  detune: oscillatorUnisonDetune,
  noiseGain,
  count: numOscillators,
};

const FilterReducer = (
  state: OscillatorState = initialState,
  action: AudioControllerAction
) => {
  switch (action.type) {
    case oscillatorActionTypes.SET_DETUNE:
      return {
        ...state,
        detune: action.payload,
      };
    case oscillatorActionTypes.SET_NOISE:
      return {
        ...state,
        noiseGain: action.payload,
      };
    case oscillatorActionTypes.SET_COUNT:
      return {
        ...state,
        count: action.payload,
      };
    default:
      return state;
  }
};
export default FilterReducer;
