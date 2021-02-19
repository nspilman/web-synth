import AudioContextWrapper from "../classes/audioContextWrapper";

function setDistortionAmount(audioContextWrapper: AudioContextWrapper, newAmount: number ) : void{
    audioContextWrapper.setDistortionAmount(newAmount)
}

export default setDistortionAmount;
