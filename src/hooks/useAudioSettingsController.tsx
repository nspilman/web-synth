import { useState } from "react";
import AudioContextWrapper from "../classes/audioContextWrapper";

interface KeyboardContextSignature {
    setIsClicked: boolean,
    octave: number,
    gain: number,
    wave: OscillatorType,
    filterType: BiquadFilterType,
    filterFrequency: number,
    filterQ: number,
    distortionAmount: number,
    numOscillators: number,
    oscillatorUnisonDetune: number,
    noiseGain: number,
    attackMs: number,
    decayMs: number,
    sustain: number,
    releaseMs: number,
    audioContextWrapper: AudioContextWrapper
}

const useStateWrapper = (initialState: KeyboardContextSignature) => {
    const [state, regularSetState] = useState(initialState);
  
    const setState = (newState: KeyboardContextSignature) => {
        const audioContextWrapper = state.audioContextWrapper;
        if(state.gain !== newState.gain){
            audioContextWrapper.setGain(newState.gain)
        }
        if(state.filterFrequency !== newState.filterFrequency){
            audioContextWrapper.setFilterFreq(newState.filterFrequency)
        }
        if(state.filterType !== newState.filterType){
            audioContextWrapper.setFilterType(newState.filterType)
        }
        if (state.filterQ !== newState.filterQ) {
            audioContextWrapper.setFilterQ(newState.filterQ);
        }
        if(state.wave !== newState.wave){
            audioContextWrapper.waveform = newState.wave;
        }
        if(state.octave !== newState.octave){
            audioContextWrapper.octave = newState.octave;
        }
        if(state.distortionAmount !== newState.distortionAmount) {
            audioContextWrapper.setDistortionAmount(newState.distortionAmount);
        }
        if(state.numOscillators != newState.numOscillators) {
            audioContextWrapper.setNumOscillators(newState.numOscillators);
        }
        if(state.oscillatorUnisonDetune != newState.oscillatorUnisonDetune) {
            audioContextWrapper.setOscillatorUnisonDetune(newState.oscillatorUnisonDetune);
        }
        if(state.noiseGain != newState.noiseGain) {
            audioContextWrapper.setNoiseGain(newState.noiseGain);
        }
        if(state.attackMs != newState.attackMs) {
            audioContextWrapper.setAttackMs(newState.attackMs);
        }
        if(state.decayMs != newState.decayMs) {
            audioContextWrapper.setDecayMs(newState.decayMs);
        }
        if(state.sustain != newState.sustain) {
            audioContextWrapper.setSustain(newState.sustain);
        }
        if(state.releaseMs != newState.releaseMs) {
            audioContextWrapper.setReleaseMs(newState.releaseMs);
        }

      regularSetState((prevState: KeyboardContextSignature)  => ({
        ...prevState,
        ...newState
      }));
    };
  
    return [state, setState];
  };

  export default useStateWrapper;