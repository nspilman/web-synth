import React from "react";
import Key from "./key";
import ControlPanel from "./controlPanel";
import { useSelector } from "react-redux";
import { AppState } from "../store/reducers";
import { StyledKeyboard, StyledKeys } from "./styled/keyboard";

function Keyboard() {
  const notes = useSelector((state: AppState) => state.isPlaying);
  const notesArray = Array.from(notes.keys());

  return (
    <StyledKeyboard id="Keyboard">
      <ControlPanel />
      <StyledKeys className="keyboard">
        {notesArray.map((note) => (
          <Key keyName={note} key={note} />
        ))}
      </StyledKeys>
    </StyledKeyboard>
  );
}

export default Keyboard;
