import AudioContextWrapper from '../../classes/audioContextWrapper';
import getDefaultContextWrapperValues from "../../hooks/getDefaultContextWrapperValues";

type AudioContextState = AudioContextWrapper;
const initialState: AudioContextWrapper = new AudioContextWrapper(getDefaultContextWrapperValues())

const AudioContextReducer = (state: AudioContextState = initialState) => {    
        return state;
    }
export default AudioContextReducer;