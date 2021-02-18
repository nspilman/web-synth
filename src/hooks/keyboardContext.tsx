
import React, { createContext, useState } from 'react';
import AudioContextWrapper from '../classes/audioContextWrapper';
import filterTypes from '../data/filterTypes';
import waveforms from "../data/waveforms";

const initialOctave = 4;
const initialGain = 1;
const initialFilterType = filterTypes.lowpass;
const initialFilterFrequency = 20000;

const defaultState = {
    octave: initialOctave,
    setIsClicked: false,
    wave: waveforms.sine,
    gain: initialGain,
    filterType: initialFilterType,
    filterFrequency: initialFilterFrequency,
    audioContextWrapper: new AudioContextWrapper(initialGain, initialFilterType, initialFilterFrequency)
}

interface KeyboardContextSignature {
    octave: number,
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

const KeyboardContext = createContext<KeyboardContextSignature>({ ...defaultState });
const UpdateKeyboardContext = createContext<any>({});

export function KeyboardProvider({ children }: KeyboardProviderType) {
    const [keyboardState, updateKeyboardState] = useState({ ...defaultState });

    return (
        <UpdateKeyboardContext.Provider value={updateKeyboardState}>
            <KeyboardContext.Provider value={keyboardState}>
                {children}
            </KeyboardContext.Provider>
        </UpdateKeyboardContext.Provider>
    )
}

export { KeyboardContext, UpdateKeyboardContext }
