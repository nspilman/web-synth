import { AudioControllerAction } from "../actions";
import { filterActionTypes } from "../actions/filterActions";
import IAudioContextParameters from "../../interfaces/IAudioContextParameters";
import IFilterParameters from "../../interfaces/IFilterParameters";
import getDefaultContextWrapper from "../../hooks/getDefaultContextWrapperValues";

const { filterParameters }: IAudioContextParameters =
  getDefaultContextWrapper();
const FilterReducer = (
  state: IFilterParameters = filterParameters,
  action: AudioControllerAction
) => {
  switch (action.type) {
    case filterActionTypes.SET_FREQ:
      return {
        ...state,
        freq: action.payload,
      };
    case filterActionTypes.SET_Q:
      return {
        ...state,
        q: action.payload,
      };
    case filterActionTypes.SET_TYPE:
      return {
        ...state,
        type: action.payload,
      };
    default:
      return state;
  }
};
export default FilterReducer;
