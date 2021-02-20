import React, { useContext } from 'react';
import stopNote from '../hooks/stopNote';
import playNote from '../hooks/playNote';
import keyboardToNoteHash from "../data/keyboardToNoteHash"

import { KeyboardContext } from "../hooks/keyboardContext";

function KeyboardController() {
    const { audioContextWrapper } = useContext(KeyboardContext)
    const parseAndPlayKeyCommand = (e : KeyboardEvent) => {
        const note = keyboardToNoteHash[e.key];
        if(note){
            playNote(audioContextWrapper, note)
        }
    }

    const parseAndStopKeyCommand = ({key} : KeyboardEvent) => {
        const note = keyboardToNoteHash[key];
        if(note){
            stopNote(audioContextWrapper, note)
        }
    }
    
    window.addEventListener('keydown', (event) => parseAndPlayKeyCommand(event));
    window.addEventListener('keyup', (event) => parseAndStopKeyCommand(event));
    return ( <span id="physical-keyboard-input-controller"/>)
}

export default KeyboardController