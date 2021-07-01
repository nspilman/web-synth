import React, { useState, useEffect } from "react";
import WaveshaperNodeWrapper from "../classes/WaveshaperNodeWrapper";
import { keyNames } from "../data/notes";
import AudioContextService from "../services/audioContextService";
import useFilterNode from "./useFilterNode";
import useGainNode from "./useGainNode";
import useVoices from "./useVoices";

const useAudioContextWrapper = () => {
  const audioContext = AudioContextService.getInstance();
  const filterNode = useFilterNode(audioContext);

  const masterGainNode = useGainNode(audioContext);
  const waveshaperNode = new WaveshaperNodeWrapper(audioContext);
  filterNode.connect(waveshaperNode.waveshaperNode);
  waveshaperNode.waveshaperNode.connect(masterGainNode);
  masterGainNode.connect(audioContext.destination);

  // const { playNote, stopNote } = useVoices();
  // const playNoteWrapper = (note: keyNames) => {
  //   playNote(note, filterNode);
  // };
  // const stopNoteWrapper = (note: keyNames) => {
  //   stopNote(note);
  // };
  return { filterNode };
};

export default useAudioContextWrapper;
