import { AudioControllerAction, filterActionTypes } from "../actions/audioControllerAction"
import IAudioContextParameters from "../../interfaces/IAudioContextParameters";
import IFilterParameters from "../../interfaces/IFilterParameters";
import getDefaultContextWrapper from "../../hooks/getDefaultContextWrapperValues";

const { filterParameters }: IAudioContextParameters = getDefaultContextWrapper();
const FilterReducer = (state: IFilterParameters = filterParameters, action: AudioControllerAction) => {
    switch (action.type) {
        case filterActionTypes.SET_FREQ:
            action.setAudioController(action.payload);
            return {
                ...state,
                freq: action.payload,
            }
        case filterActionTypes.SET_Q:
            action.setAudioController(action.payload);
            return {
                ...state,
                q: action.payload,
            }
        case filterActionTypes.SET_TYPE:
            action.setAudioController(action.payload);
            return {
                ...state,
                type: action.payload,
            }
        default:
            return state;
    }
}
export default FilterReducer;