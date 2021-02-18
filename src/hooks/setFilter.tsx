import AudioContextWrapper from "../classes/audioContextWrapper";

export function setFilterType(audioContextWrapper: AudioContextWrapper, newFilterType: string) : void {
    audioContextWrapper.setFilterType(newFilterType);
}

export function setFilterFrequency(audioContextWrapper: AudioContextWrapper, newFilterFrequency: number) : void {
    audioContextWrapper.setFilterFreq(newFilterFrequency);
}
