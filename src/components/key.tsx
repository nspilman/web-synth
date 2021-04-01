import styled from "styled-components";
import React, { useState } from 'react';
import { playNote, stopNote } from '../hooks/noteHook';
import keyboardToNoteHash from "../data/keyboardToNoteHash";
import {StyledFlat, StyledNatural } from "./styled/key";

interface KeyProps {
    note: string,
}

function Key({ note }: KeyProps) {
    const [isPlaying, setIsPlaying] = useState(false)
    const isFlat : boolean = note.endsWith('b')
  
    const parseAndPlayKeyCommand = ({key} : KeyboardEvent) => {
        const triggeredNote = keyboardToNoteHash[key.toLowerCase()];
        if(note === triggeredNote){
            playAndSetPlaying(note)
        }
    }

    const parseAndStopKeyCommand = ({key} : KeyboardEvent) => {
        const note = keyboardToNoteHash[key.toLowerCase()];
        if(note){
            stopAndSetStopped(note)
        }
    }

    const playAndSetPlaying = (note : string) => {
        setIsPlaying(true)
        playNote(note)
    }

    const stopAndSetStopped = (note : string) => {
        stopNote(note)
        setIsPlaying(false)
    }

    window.addEventListener('keydown', (event) => parseAndPlayKeyCommand(event));
    window.addEventListener('keyup', (event) => parseAndStopKeyCommand(event));
    const componentToRender = isFlat ? StyledFlat : StyledNatural;
    return (
        React.createElement(componentToRender, {
            isPlaying,
            onMouseDown : () => playAndSetPlaying ( note ),
            onMouseLeave : () => stopAndSetStopped ( note ),
            onMouseUp : () => stopAndSetStopped ( note ),
        },
        note)
        )
}

export default Key