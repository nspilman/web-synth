import IAudioContextParameters from "../interfaces/IAudioContextParameters";
import AudioContextWrapper from "../classes/audioContextWrapper";

export default interface IKeyboardContextSignature {
    setIsClicked: boolean,
    audioContextParameters : IAudioContextParameters,
    audioContextWrapper: AudioContextWrapper
}