import { keyNames } from "../../data/notes";

export enum playNoteActionTypes {
  PLAY_NOTE = "PLAY_NOTE",
  STOP_NOTE = "STOP_NOTE",
}

export type playNoteAction = {
  type: playNoteActionTypes;
  payload: keyNames;
};

export const createPlayNoteAction = (changingValue: keyNames) => {
  return {
    type: playNoteActionTypes.PLAY_NOTE,
    payload: changingValue,
  };
};

export const createStopNoteAction = (changingValue: keyNames) => {
  return {
    type: playNoteActionTypes.STOP_NOTE,
    payload: changingValue,
  };
};
