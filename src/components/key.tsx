import styled from "styled-components";
import React, { useContext, useState } from 'react';
import stopNote from '../hooks/stopNote';
import playNote from '../hooks/playNote';
import keyboardToNoteHash from "../data/keyboardToNoteHash"

import { KeyboardContext } from "../hooks/keyboardContext";

const StyledKey = styled.div`
    height:10rem;
    width:5rem;
    background-color:${(props:{isPlaying : boolean}) => props.isPlaying ? 'rgb(55,55,55)' : 'rgb(250,250,250)'};
    margin:.1rem;
    display:flex;
    align-items:center;
    justify-content:center;
    &:hover{
        background-color:${(props:{isPlaying : boolean}) => props.isPlaying ? 'rgb(55,55,55)' : 'rgb(230,230,230)'};
        color:rgb(90,20,20);
    }
    &::selection{
        background: transparent;
    }
`

interface KeyProps {
    note: string,
    isMouseDown: boolean,
}

function Key({ note, isMouseDown }: KeyProps) {
    const { audioContextWrapper } = useContext(KeyboardContext)
    const [isPlaying, setIsPlaying] = useState(false)
  
    const parseAndPlayKeyCommand = ({key} : KeyboardEvent) => {
        const triggeredNote = keyboardToNoteHash[key];
        if(note === triggeredNote){
            setIsPlaying(true)
        }
    }

    const parseAndStopKeyCommand = ({key} : KeyboardEvent) => {
        const triggeredNote = keyboardToNoteHash[key];
        if(note === triggeredNote){
            setIsPlaying(false)
        }
    }

    window.addEventListener('keydown', (event) => parseAndPlayKeyCommand(event));
    window.addEventListener('keyup', (event) => parseAndStopKeyCommand(event));

    return (<StyledKey
        isPlaying = {isPlaying}
        onMouseDown={() => playNote(audioContextWrapper, note )}
        onMouseLeave={() => stopNote(audioContextWrapper, note )}
        onMouseUp={() => stopNote(audioContextWrapper,  note )}
        onMouseEnter={() => isMouseDown && playNote(audioContextWrapper, note )}
    >{note}</StyledKey>)
}

export default Key