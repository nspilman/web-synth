import React from "react";
import { useSelector } from "react-redux";
import { AppState } from "../store/reducers";

function useGainNode(audioContext: AudioContext) {
  const { gain } = useSelector((state: AppState) => state.basic);
  const masterGainNode = audioContext.createGain();
  masterGainNode.gain.value = gain;
  return masterGainNode;
}

export default useGainNode;
