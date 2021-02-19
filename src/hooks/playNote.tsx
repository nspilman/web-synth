import AudioContextWrapper from "../classes/audioContextWrapper";

function playNote(audioContextWrapper: AudioContextWrapper, note: string) : void{
    audioContextWrapper.playNote(note)
}

export default playNote;
