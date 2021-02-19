
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

const defaultContextWrapperValues : IAudioContextParameters = {
    gain : initialGain,
    octave : initialOctave,
    filterFreq : initialFilterFrequency,
    filterType : initialFilterType,
    waveForm: waveforms.sine,
}

const initialDistortionAmount = 0;

const defaultState = {
    setIsClicked: false,
    wave: waveforms.sine,
    gain: initialGain,
    octave: initialOctave,
    filterType: initialFilterType,
    filterFrequency: initialFilterFrequency,
    audioContextWrapper: new AudioContextWrapper(defaultContextWrapperValues)
}

interface KeyboardContextSignature {
    setIsClicked: boolean,
    gain: number,
    octave: number,
    wave: OscillatorType,
    filterType: BiquadFilterType,
    filterFrequency: number,
    distortionAmount: number,
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
