
import React, { createContext } from 'react';
import useAudioSettingsController from "./useAudioSettingsController"
import AudioContextWrapper from '../classes/audioContextWrapper';
import filterTypes from '../data/filterTypes';
import waveforms from "../data/waveforms";
import IAudioContextParameters from "../interfaces/IAudioContextParameters"

const initialGain = 1;
const initialOctave = 4;
const initialFilterType = filterTypes.lowpass;
const initialFilterFrequency = 20000;
const initialFilterQ = 0.0001;
const initialDistortionAmount = 0;

const defaultContextWrapperValues : IAudioContextParameters = {
    gain : initialGain,
    octave : initialOctave,
    filterFreq : initialFilterFrequency,
    filterType : initialFilterType,
    filterQ: initialFilterQ,
    waveForm: waveforms.sine,
    distortionAmount: initialDistortionAmount
}

const defaultState = {
    setIsClicked: false,
    wave: waveforms.sine,
    gain: initialGain,
    octave: initialOctave,
    filterType: initialFilterType,
    filterFrequency: initialFilterFrequency,
    filterQ: initialFilterQ,
    distortionAmount: initialDistortionAmount,
    audioContextWrapper: new AudioContextWrapper(defaultContextWrapperValues)
}

interface KeyboardProviderType {
    children: React.ReactNode
}

const KeyboardContext = createContext<any>({ ...defaultState });
const UpdateKeyboardContext = createContext<any>({});

export function KeyboardProvider({ children }: KeyboardProviderType) {
    const [keyboardState, updateKeyboardState] = useAudioSettingsController({...defaultState});

    return (
        <UpdateKeyboardContext.Provider value={updateKeyboardState}>
            <KeyboardContext.Provider value={keyboardState}>
                {children}
            </KeyboardContext.Provider>
        </UpdateKeyboardContext.Provider>
    )
}

export { KeyboardContext, UpdateKeyboardContext }
