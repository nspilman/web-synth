import React from "react";
import WaveshaperNodeWrapper from "../classes/WaveshaperNodeWrapper";
import AudioContextService from "../services/audioContextService";
import useFilterNode from "./useFilterNode";
import useGainNode from "./useGainNode";

const useAudioContextWrapper = () => {
  const audioContext = AudioContextService.getInstance();
  const filterNode = useFilterNode(audioContext);
  const masterGainNode = useGainNode(audioContext);
  const waveshaperNode = new WaveshaperNodeWrapper(audioContext);
  filterNode.connect(waveshaperNode.waveshaperNode);
  waveshaperNode.waveshaperNode.connect(masterGainNode);
  masterGainNode.connect(audioContext.destination);
  return { filterNode };
};

export default useAudioContextWrapper;
