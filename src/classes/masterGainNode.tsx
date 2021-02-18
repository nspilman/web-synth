function MasterGainNode(audioContext: AudioContext, initialVolume : number){
    const masterGainNode = audioContext.createGain();
    //masterGainNode.connect(audioContext.destination);
    masterGainNode.gain.value = initialVolume;
    return masterGainNode;
}

export default MasterGainNode;