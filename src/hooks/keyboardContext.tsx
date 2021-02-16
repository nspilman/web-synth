
import React, { useState, useContext } from 'react';
import { useImmer } from "use-immer";

type UpdateKeyboardContextType = {
    updateKeyboardState: () => void | undefined;
  };

const defaultOctave = 4;
const defaultState = {
    octave: defaultOctave,
    setIsClicked: false
  }

const voidFunction = ()=>{};

const KeyboardContext = React.createContext({...defaultState});
const UpdateKeyboardContext= React.createContext<any>({updateKeyboardState: voidFunction});

export function KeyboardProvider({children} : any){
const [keyboardState, updateKeyboardState] = useImmer({...defaultState});
    return (
        <KeyboardContext.Provider value={keyboardState}>
        <UpdateKeyboardContext.Provider value = {updateKeyboardState}>
            {children}
        </UpdateKeyboardContext.Provider>
    </KeyboardContext.Provider>
    )
}

export { KeyboardContext, UpdateKeyboardContext }
