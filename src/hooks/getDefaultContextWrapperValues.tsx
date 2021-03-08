
import IAudioContextParameters from "../interfaces/IAudioContextParameters";
import filterTypes from '../data/filterTypes';
import waveforms from "../data/waveforms";

const getDefaultContextWrapper = () : IAudioContextParameters => {
    const initialGain = 1;
    const initialOctave = 4;
    const initialFilterType = filterTypes.lowpass;
    const initialFilterFrequency = 20000;
    const initialFilterQ = 0.0001;
    const initialDistortionAmount = 0;
    const initialNumOscillators = 1;
    const initialOscillatorUnisonDetune = 0;
    const initialNoiseGain = 0;
    const initialAttackMs = 0.01;
    const initialDecayMs = 0.01;
    const initialSustain = 1.0;
    const initialReleaseMs = 0.01;
    
    const defaultContextWrapperValues : IAudioContextParameters = {
        gain : initialGain,
        octave : initialOctave,
        waveForm: waveforms.sine,
        distortionAmount: initialDistortionAmount,
        noiseGain: initialNoiseGain,
        filterParameters : {
            freq : initialFilterFrequency,
            type : initialFilterType,
            q : initialFilterQ,
        },
        oscillatorParameters :{
            numOscillators: initialNumOscillators,
            oscillatorUnisonDetune: initialOscillatorUnisonDetune,
        },
        envelopeParameters :{
            attackMs: initialAttackMs,
            decayMs: initialDecayMs,
            sustain: initialSustain,
            releaseMs: initialReleaseMs
        },
    } 
    return defaultContextWrapperValues;  
} 

export default getDefaultContextWrapper;
