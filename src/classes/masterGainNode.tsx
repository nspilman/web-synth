function MasterGainNode(audioContext: AudioContext, initialVolume: number) {
  const masterGainNode = audioContext.createGain();
  masterGainNode.gain.value = initialVolume;
  return masterGainNode;
}

export default MasterGainNode;
