import { useState } from "react";
import AudioContextWrapper from "../classes/audioContextWrapper";

interface KeyboardContextSignature {
    setIsClicked: boolean,
    octave: number,
    gain: number,
    wave: OscillatorType,
    filterType: BiquadFilterType,
    filterFrequency: number,
    distortionAmount: number,
    numOscillators: number,
    oscillatorUnisonDetune: number,
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
        if(state.wave !== newState.wave){
            audioContextWrapper.waveform = newState.wave;
        }
        if(state.octave !== newState.octave){
            audioContextWrapper.octave = newState.octave;
        }
        if(state.distortionAmount != newState.distortionAmount) {
            audioContextWrapper.setDistortionAmount(newState.distortionAmount);
        }
        if(state.numOscillators != newState.numOscillators) {
            audioContextWrapper.setNumOscillators(newState.numOscillators);
        }
        if(state.oscillatorUnisonDetune != newState.oscillatorUnisonDetune) {
            audioContextWrapper.setOscillatorUnisonDetune(newState.oscillatorUnisonDetune);
        }

      regularSetState((prevState: KeyboardContextSignature)  => ({
        ...prevState,
        ...newState
      }));
    };
  
    return [state, setState];
  };

  export default useStateWrapper;