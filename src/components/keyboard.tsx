import React, { Dispatch } from "react";
import { keyNames } from "../data/notes";
import Key from "./key";
import ControlPanel from "./controlPanel";
import { useDispatch, useSelector } from "react-redux";
import { AppState } from "../store/reducers";
import {
  createPlayNoteAction,
  createStopNoteAction,
  playNoteAction,
} from "../store/actions/playNoteActions";
import { StyledKeyboard, StyledKeys } from "./styled/keyboard";

function Keyboard() {
  const notes = useSelector((state: AppState) => state.isPlaying);
  const dispatch = useDispatch<Dispatch<playNoteAction>>();

  const triggerStateChange = (
    noteToTrigger: keyNames,
    actionCreator: (changingValue: keyNames) => playNoteAction
  ) => {
    dispatch(actionCreator(noteToTrigger));
  };

  const notesArray = Array.from(notes.keys());

  const playNote = (pioneer: keyNames) => {
    triggerStateChange(pioneer, createPlayNoteAction);
  };

  const stopNote = (pioneer: keyNames) => {
    triggerStateChange(pioneer, createStopNoteAction);
  };

  return (
    <StyledKeyboard id="Keyboard">
      <ControlPanel />
      <StyledKeys className="keyboard">
        {notesArray.map((note) => (
          <Key
            keyName={note}
            key={note}
            playNote={playNote}
            stopNote={stopNote}
          />
        ))}
      </StyledKeys>
    </StyledKeyboard>
  );
}

export default Keyboard;
