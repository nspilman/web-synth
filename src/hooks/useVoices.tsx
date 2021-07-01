import React, { useMemo } from "react";
import { useSelector } from "react-redux";
import useVoice from "./useVoice";
import { getAllFrequencies, keyNames } from "../data/notes";
import { getWave } from "../data/waveforms";
import { AppState } from "../store/reducers";

const getVoices = () =>
  getAllFrequencies(0, 8).map((note) => {
    const { keyName, octave } = note;
    const { playVoice, stopVoice } = useVoice(note.keyName);
    return { keyName, octave, playVoice, stopVoice };
  });

const useVoices = () => {
  const { basic } = useSelector((state: AppState) => state);
  const { octave } = basic;
  const allVoices = useMemo(() => getVoices, [])();

  const playNote = (note: keyNames, filterNode: BiquadFilterNode) => {
    const voice = allVoices.find(
      (voice) => voice.octave == basic.octave && voice.keyName == note
    );
    if (!voice) {
      console.log(
        "Unable to find voice with note " + note + " and octave " + octave
      );
      return;
    }

    voice.playVoice();
  };

  const stopNote = (note: keyNames) => {
    const voice = allVoices.find(
      (voice) => voice.octave == basic.octave && voice.keyName == note
    );
    if (!voice) {
      console.log(
        "Unable to find voice with note " + note + " and octave " + octave
      );
      return;
    }

    voice.stopVoice();
  };

  return { playNote, stopNote };
};

export default useVoices;
