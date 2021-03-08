
import React, { createContext } from 'react';
import useAudioSettingsController from "./useAudioSettingsController";
import AudioContextWrapper from '../classes/audioContextWrapper';
import IAudioContextParameters from "../interfaces/IAudioContextParameters";
import IKeyboardContextSignature from "../interfaces/IKeyboardContextSignature";
import getDefaultContextWrapperValues from "./getDefaultContextWrapperValues";

const defaultContextWrapperValues  : IAudioContextParameters = getDefaultContextWrapperValues();
const defaultState : IKeyboardContextSignature = {
    setIsClicked: false,
    audioContextParameters : defaultContextWrapperValues,
    audioContextWrapper: new AudioContextWrapper(defaultContextWrapperValues)
}

interface KeyboardProviderType {
    children: React.ReactNode
}

const KeyboardContext = createContext<any>(defaultState);
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
