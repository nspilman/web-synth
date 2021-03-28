
import React, { createContext, useState } from 'react';
import IKeyboardContextSignature from "../interfaces/IKeyboardContextSignature";

const defaultState : IKeyboardContextSignature = {
    setIsClicked: false,
}

interface KeyboardProviderType {
    children: React.ReactNode
}

const KeyboardContext = createContext<any>(defaultState);
const UpdateKeyboardContext = createContext<any>({});

export function KeyboardProvider({ children }: KeyboardProviderType) {
    const [keyboardState, updateKeyboardState] = useState({...defaultState});

    return (
        <UpdateKeyboardContext.Provider value={updateKeyboardState}>
            <KeyboardContext.Provider value={keyboardState}>
                {children}
            </KeyboardContext.Provider>
        </UpdateKeyboardContext.Provider>
    )
}

export { KeyboardContext, UpdateKeyboardContext }
