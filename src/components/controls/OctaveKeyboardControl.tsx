import React, { useEffect, useCallback } from "react";
import { createSetOctave } from "../../store/actions/basicActions";
import { useSelector } from "react-redux";
import { AppState } from "../../store/reducers";
import { controlState } from "../controlPanel";
import { octaveParameters } from "../../data/dialControlParmeters";

const useOctaveKeyboardControl = ({ triggerStateChange }: controlState) => {
  const octave = useSelector((state: AppState) => state.basic).octave;
  const updateOctave = useCallback(({ key }: KeyboardEvent) => {
    const [decreaseOctave, increaseOctave] = ["z", "x"];
    const { min, max } = octaveParameters;
    if (key == decreaseOctave) {
      octave > min && triggerStateChange(octave - 1, createSetOctave);
    }
    if (key == increaseOctave) {
      octave < max && triggerStateChange(octave + 1, createSetOctave);
    }
  }, []);
  useEffect(() => {
    window.addEventListener("keydown", updateOctave);
  }, []);
};

export default useOctaveKeyboardControl;
