import styled from "styled-components";
import React, { useContext, useState } from 'react';
import stopNote from '../hooks/stopNote';
import playNote from '../hooks/playNote';
import keyboardToNoteHash from "../data/keyboardToNoteHash"

import { KeyboardContext } from "../hooks/keyboardContext";

interface StyledKeyProps {
    isPlaying : boolean,
    isFlat : boolean,
}

const StyledKey = styled.li`
    height:${(props: StyledKeyProps) => props.isFlat ? '5rem' : '10rem'};
    width:${(props: StyledKeyProps) => props.isFlat ? '2.5rem' : '5rem'};
    background-color:${(props: StyledKeyProps) => props.isPlaying ? 'rgb(55,55,55)' : props.isFlat ? 'rgb(20,20,20)': 'rgb(250,250,250)'};
    margin:${(props: StyledKeyProps) => props.isFlat? '0 -1.5em':'.1rem'};
    display:flex;
    position:relative;
    float:left;
    align-items:center;
    z-index:${(props: StyledKeyProps) => props.isFlat? '2':'1'};

    justify-content:center;
    &:hover{
        background-color:${(props: StyledKeyProps) => props.isPlaying ? 'rgb(55,55,55)' : 'rgb(230,230,230)'};
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
    const isFlat = note.endsWith('b')
    console.log(isFlat)
  
    const parseAndPlayKeyCommand = ({key} : KeyboardEvent) => {
        const triggeredNote = keyboardToNoteHash[key];
        if(note === triggeredNote){
            setIsPlaying(true)
            playNote(audioContextWrapper, note)
        }
    }

    const parseAndStopKeyCommand = ({key} : KeyboardEvent) => {
        const note = keyboardToNoteHash[key];
        if(note){
            stopNote(audioContextWrapper, note)
            setIsPlaying(false)
        }
    }

    window.addEventListener('keydown', (event) => parseAndPlayKeyCommand(event));
    window.addEventListener('keyup', (event) => parseAndStopKeyCommand(event));

    return (<StyledKey
        isPlaying = {isPlaying}
        isFlat = {isFlat}
        onMouseDown={() => playNote(audioContextWrapper, note )}
        onMouseLeave={() => stopNote(audioContextWrapper, note )}
        onMouseUp={() => stopNote(audioContextWrapper,  note )}
        onMouseEnter={() => isMouseDown && playNote(audioContextWrapper, note )}
    >{note}</StyledKey>)
}

export default Key