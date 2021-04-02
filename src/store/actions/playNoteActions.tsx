import { keyNames } from "../../data/notes"
import audioContextService from "../../services/audioContextService";
const audioContext = audioContextService.getInstance();

export enum playNoteActionTypes {
    PLAY_NOTE = "PLAY_NOTE",
    STOP_NOTE = "STOP_NOTE"
}

export type playNoteAction = {
    type : playNoteActionTypes,
    setAudioController : (keyName :keyNames) => void;
    payload : keyNames
}


export const createPlayNoteAction = (changingValue : keyNames) =>{
    return {
        type: playNoteActionTypes.PLAY_NOTE,
        payload: changingValue,
        setAudioController: () => audioContext.playNote(changingValue),
    }
}

export const createStopNoteAction = (changingValue : keyNames) =>{
    return {
        type: playNoteActionTypes.STOP_NOTE,
        payload: changingValue,
        setAudioController: () => audioContext.stopNote(changingValue),
    }
}