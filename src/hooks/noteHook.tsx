import audioContextService from "../services/audioContextService";

const audioContextWrapper = audioContextService.getInstance();

export function playNote(note: string) : void{
    audioContextWrapper.playNote(note)
}

export function stopNote(note: string) : void{
    audioContextWrapper.stopNote(note)
}

export default { playNote, stopNote };
