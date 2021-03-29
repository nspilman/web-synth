import AudioContextWrapper from '../classes/audioContextWrapper';
import getDefaultContextWrapperValues from "../hooks/getDefaultContextWrapperValues";

export default class AudioContextService {
    static audioContext : AudioContextWrapper | null = null; 
    static getInstance(){
        if(!AudioContextService.audioContext){
            AudioContextService.audioContext = new AudioContextWrapper(getDefaultContextWrapperValues());
        }
        return AudioContextService.audioContext;
    }
}
