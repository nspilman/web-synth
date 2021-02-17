
import React, { createContext, useState } from 'react';
import AudioContextWrapper from '../classes/audioContextWrapper';
import waveforms from "../data/waveforms";

const initialOctave = 4;
const initialGain = 2;

const defaultState = {
    octave: initialOctave,
    setIsClicked: false,
    wave: waveforms.sine,
    gain: initialGain,
    audioContextWrapper: new AudioContextWrapper(initialGain)
}

interface KeyboardContextSignature {
    octave: number,
    setIsClicked: boolean,
    gain: number,
    wave: OscillatorType
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
