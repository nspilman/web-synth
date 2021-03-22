import AudioContextWrapper from "../classes/audioContextWrapper";

export default interface IKeyboardContextSignature {
    setIsClicked: boolean,
    audioContextWrapper: AudioContextWrapper
}