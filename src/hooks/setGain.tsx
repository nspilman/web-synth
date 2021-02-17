import AudioContextWrapper from "../classes/audioContextWrapper";

function setGain(audioContextWrapper: AudioContextWrapper, newGain: number ) : void{
    audioContextWrapper.setGain(newGain)
}

export default setGain;
