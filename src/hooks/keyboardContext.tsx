
import React, { createContext } from 'react';
import useAudioSettingsController from "./useAudioSettingsController"
import AudioContextWrapper from '../classes/audioContextWrapper';
import filterTypes from '../data/filterTypes';
import waveforms from "../data/waveforms";
import IAudioContextParameters from "../interfaces/IAudioContextParameters"

const initialGain = 1;
const initialFilterType = filterTypes.lowpass;
const initialFilterFrequency = 20000;
const defaultContextWrapperValues : IAudioContextParameters = {
    gain : initialGain,
    filterFreq : initialFilterFrequency,
    filterType : initialFilterType,
    waveForm: waveforms.sine,
}

const defaultState = {
    setIsClicked: false,
    wave: waveforms.sine,
    gain: initialGain,
    filterType: initialFilterType,
    filterFrequency: initialFilterFrequency,
    audioContextWrapper: new AudioContextWrapper(defaultContextWrapperValues)
}

interface KeyboardContextSignature {
    setIsClicked: boolean,
    gain: number,
    wave: OscillatorType,
    filterType: BiquadFilterType,
    filterFrequency: number,
    audioContextWrapper: AudioContextWrapper
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
