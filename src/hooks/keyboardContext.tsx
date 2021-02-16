
import React, { createContext, useState } from 'react';
import AudioContextWrapper from '../classes/audioContextWrapper';
import waveforms from "../data/waveforms";

type UpdateKeyboardContextType = {
    updateKeyboardState: () => void | undefined;
  };

const defaultOctave = 4;
const defaultState = {
    octave: defaultOctave,
    setIsClicked: false,
    wave: waveforms.sine,
    audioContextWrapper: new AudioContextWrapper()
  }

type UpdateKeyboardValues = {
    updateKeyboardState: () => void;
}

const KeyboardContext = React.createContext<any>({...defaultState});
const UpdateKeyboardContext = createContext<any>(undefined);

export function KeyboardProvider({children} : any){
const [keyboardState, updateKeyboardState] = useState({...defaultState});

    return (
        <UpdateKeyboardContext.Provider value = {updateKeyboardState}>
            <KeyboardContext.Provider value={ keyboardState }>
                {children}
            </KeyboardContext.Provider>
        // </UpdateKeyboardContext.Provider>
    )
}

export { KeyboardContext, UpdateKeyboardContext }
