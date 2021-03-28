import { AudioControllerAction, basicActionTypes } from "../actions/audioControllerAction"
import getDefaultContextWrapperValues from "../../hooks/getDefaultContextWrapperValues";
import IAudioContextParameters from "../../interfaces/IAudioContextParameters";

type BasicState = {
    distortion: number,
    gain: number,
    octave: number,
    waveform: OscillatorType
}

const { gain, distortion, octave, waveform }: IAudioContextParameters = getDefaultContextWrapperValues();

const initialState: BasicState = {
    gain,
    distortion,
    octave,
    waveform
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
            console.log({action})
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