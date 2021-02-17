
import React, { createContext, useState } from 'react';
import AudioContextWrapper from '../classes/audioContextWrapper';
import waveforms from "../data/waveforms";

const defaultOctave = 4;
const defaultState = {
    octave: defaultOctave,
    setIsClicked: false,
    wave: waveforms.sine,
    audioContextWrapper: new AudioContextWrapper()
  }

  interface KeyboardContextSignature {
      octave : number,
      setIsClicked : boolean,
      wave: OscillatorType
      audioContextWrapper: AudioContextWrapper
  }


interface KeyboardProviderType {
    children : React.ReactNode
}

interface UpdateKeyboardStateSignature {
    updateKeyboardState : React.SetStateAction<KeyboardContextSignature>
}

const KeyboardContext = createContext<KeyboardContextSignature>({...defaultState});
const UpdateKeyboardContext = createContext<any>({});

export function KeyboardProvider({children} : KeyboardProviderType){
const [keyboardState, updateKeyboardState] = useState({...defaultState});

    return (
        <UpdateKeyboardContext.Provider value = {updateKeyboardState}>
            <KeyboardContext.Provider value={ keyboardState }>
                {children}
            </KeyboardContext.Provider>
        </UpdateKeyboardContext.Provider>
    )
}

export { KeyboardContext, UpdateKeyboardContext }
