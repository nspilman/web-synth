function FilterNode(audioContext: AudioContext, initialType : string, initialFreq : number){
    const filterNode = audioContext.createBiquadFilter();
    filterNode.type = initialType as BiquadFilterType;
    filterNode.frequency.value = initialFreq;
    return filterNode;
}

export default FilterNode;