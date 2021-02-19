import AudioContextWrapper from "../classes/audioContextWrapper";


function stopNote(audioContextWrapper: AudioContextWrapper, note: string) : void{
    audioContextWrapper.stopNote(note);
}

export default stopNote;
