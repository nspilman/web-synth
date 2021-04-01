import { AudioControllerAction } from "../actions"
import { basicActionTypes } from "../actions/basicActions"
import getDefaultContextWrapperValues from "../../hooks/getDefaultContextWrapperValues";
import IAudioContextParameters from "../../interfaces/IAudioContextParameters";

type BasicState = {
    distortion: number,
    gain: number,
    octave: number,
    waveformId: number
}

const { gain, distortion, octave, waveformId }: IAudioContextParameters = getDefaultContextWrapperValues();

const initialState: BasicState = {
    gain,
    distortion,
    octave,
    waveformId
}
const BasicReducer = (state: BasicState = initialState, action: AudioControllerAction) => {
    switch (action.type) {
        case basicActionTypes.SET_DISTORTION:
            action.setAudioController(action.payload);
            return {
                ...state,
                distortion: action.payload,
            }
        case basicActionTypes.SET_WAVEFORM:
            action.setAudioController(action.payload);
            return {
                ...state,
                waveform: action.payload,
            }
        case basicActionTypes.SET_OCTAVE:
            action.setAudioController(action.payload);
            return {
                ...state,
                octave: action.payload,
            }
        case basicActionTypes.SET_GAIN:
            action.setAudioController(action.payload);
            return {
                ...state,
                gain: action.payload,
            }
        default:
            return state;
    }
}
export default BasicReducer;