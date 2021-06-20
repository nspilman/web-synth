import React, { useEffect } from "react";
import keyboardToNoteHash from "../data/keyboardToNoteHash";
import { StyledFlat, StyledNatural } from "./styled/key";
import { keyNames } from "../data/notes";
import { useSelector } from "react-redux";
import { AppState } from "../store/reducers";

interface KeyProps {
  keyName: keyNames;
  stopNote: (value: keyNames) => void;
  playNote: (value: keyNames) => void;
}

function Key({ keyName, stopNote, playNote }: KeyProps) {
  const isFlat: boolean = keyName.endsWith("b");
  const isPlaying =
    useSelector((state: AppState) => state.isPlaying.get(keyName)) ?? false;

  const parseAndPlayKeyCommand = ({ key }: KeyboardEvent) => {
    const triggeredNote = keyboardToNoteHash[key.toLowerCase()];
    if (keyName === triggeredNote) {
      playNote(keyName);
    }
  };

  const parseAndStopKeyCommand = ({ key }: KeyboardEvent) => {
    const triggeredNote = keyboardToNoteHash[key.toLowerCase()];
    if (keyName === triggeredNote) {
      stopNote(keyName);
    }
  };

  useEffect(() => {
    if (isPlaying) {
      window.addEventListener("keyup", (event) => {
        parseAndStopKeyCommand(event);
      });
    } else {
      window.addEventListener("keydown", (event) => {
        parseAndPlayKeyCommand(event);
      });
    }
  }, [isPlaying]);
  const componentToRender = isFlat ? StyledFlat : StyledNatural;
  return React.createElement(
    componentToRender,
    {
      isPlaying,
      onMouseDown: () => playNote(keyName),
      onMouseLeave: () => stopNote(keyName),
      onMouseUp: () => stopNote(keyName),
    },
    keyName
  );
}

export default Key;
