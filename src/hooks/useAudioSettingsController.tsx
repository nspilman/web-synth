import { useState } from "react";
import IKeyboardContextSignature from "../interfaces/IKeyboardContextSignature"; 

const useStateWrapper = (initialState: IKeyboardContextSignature) => {
    const [state, regularSetState] = useState(initialState);
  
    const setState = (newState: IKeyboardContextSignature) => {
        const audioContextParameters = state.audioContextParameters;
        const audioContextWrapper = state.audioContextWrapper;
        const newAudioContextParameters = newState.audioContextParameters;
        if(audioContextParameters.gain !== newAudioContextParameters.gain){
            audioContextWrapper.setGain(newAudioContextParameters.gain)
        }

        const { filterParameters, oscillatorParameters, envelopeParameters } = audioContextParameters;
        if(audioContextParameters.waveForm !== newAudioContextParameters.waveForm){
            audioContextWrapper.waveform = newAudioContextParameters.waveForm;
        }
        if(audioContextParameters.octave !== newAudioContextParameters.octave){
            audioContextWrapper.octave = newAudioContextParameters.octave;
        }
        if(audioContextParameters.distortionAmount !== newAudioContextParameters.distortionAmount) {
            audioContextWrapper.setDistortionAmount(newAudioContextParameters.distortionAmount);
        }

        // Filter State Changes
        const newFilterParameters = newAudioContextParameters.filterParameters; 
        if(filterParameters.freq !== newFilterParameters.freq){
            audioContextWrapper.setFilterFreq(newFilterParameters.freq)
        }
        if(filterParameters.type !== newAudioContextParameters.filterParameters.type){
            audioContextWrapper.setFilterType(newFilterParameters.type)
        }
        if (filterParameters.q !== newAudioContextParameters.filterParameters.q) {
            audioContextWrapper.setFilterQ(newFilterParameters.q);
        }

        // Oscillator State Changes
        const newOscillatorParameters = newAudioContextParameters.oscillatorParameters;
        if(oscillatorParameters.numOscillators != newOscillatorParameters.numOscillators) {
            audioContextWrapper.setNumOscillators(newOscillatorParameters.numOscillators);
        }
        if(oscillatorParameters.oscillatorUnisonDetune != newOscillatorParameters.oscillatorUnisonDetune) {
            audioContextWrapper.setOscillatorUnisonDetune(newOscillatorParameters.oscillatorUnisonDetune);
        }
        if(audioContextParameters.noiseGain != newAudioContextParameters.noiseGain) {
            audioContextWrapper.setNoiseGain(newAudioContextParameters.noiseGain);
        }

        // Envelope State Changes
        const newEnvelopeParameters = newAudioContextParameters.envelopeParameters;
        if(envelopeParameters.attackMs != newEnvelopeParameters.attackMs) {
            audioContextWrapper.setAmpEnvAttackMs(newEnvelopeParameters.attackMs);
        }
        if(envelopeParameters.decayMs != newEnvelopeParameters.decayMs) {
            audioContextWrapper.setAmpEnvDecayMs(newEnvelopeParameters.decayMs);
        }
        if(envelopeParameters.sustain != newEnvelopeParameters.sustain) {
            audioContextWrapper.setAmpEnvSustain(newEnvelopeParameters.sustain);
        }
        if(envelopeParameters.releaseMs != newEnvelopeParameters.releaseMs) {
            audioContextWrapper.setAmpEnvReleaseMs(newEnvelopeParameters.releaseMs);
        }

      regularSetState((prevState: IKeyboardContextSignature)  => ({
        ...prevState,
        ...newState
      }));
    };
  
    return [state, setState];
  };

  export default useStateWrapper;