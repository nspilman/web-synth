import { AudioControllerAction, oscillatorActionTypes } from "../actions/audioControllerAction"
import IAudioContextParameters from "../../interfaces/IAudioContextParameters";
import getDefaultContextWrapper from "../../hooks/getDefaultContextWrapperValues";

type OscillatorState = {
    detune: number,
    noiseGain: number,
    count : number,
}

const { noiseGain, oscillatorParameters } : IAudioContextParameters = getDefaultContextWrapper();
const { oscillatorUnisonDetune, numOscillators} = oscillatorParameters;

const initialState: OscillatorState = {
    detune: oscillatorUnisonDetune,
    noiseGain,
    count : numOscillators
}

const FilterReducer = (state: OscillatorState = initialState, action: AudioControllerAction) => {    
    switch (action.type) {
        case oscillatorActionTypes.SET_DETUNE:
            action.setAudioController(action.payload);
            return {
                ...state,
                detune: action.payload,
            }
        case oscillatorActionTypes.SET_NOISE:
            action.setAudioController(action.payload);
            return {
                ...state,
                noiseGain: action.payload,
            }
            case oscillatorActionTypes.SET_COUNT:
            action.setAudioController(action.payload);
            return {
                ...state,
                count: action.payload,
            }
        default:
            return state;
    }
}
export default FilterReducer;