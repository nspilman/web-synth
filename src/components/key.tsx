import styled from "styled-components";
import React, { useContext } from 'react';
import stopNote from '../hooks/stopNote';
import playNote from '../hooks/playNote';

import { KeyboardContext } from "../hooks/keyboardContext";

const StyledKey = styled.div`
    height:10rem;
    width:5rem;
    background-color:rgb(250,250,250);
    margin:.1rem;
    display:flex;
    align-items:center;
    justify-content:center;
    &:hover{
        background-color:rgb(230,230,230);
        color:rgb(90,20,20);
    }
    &::selection{
        background: transparent;
    }
`

interface Note {
    key: string,
}

interface KeyProps {
    note: string,
    isMouseDown: boolean,
    octave: number,
}

function Key({ note, isMouseDown, octave }: KeyProps) {
    const { audioContextWrapper } = useContext(KeyboardContext);
    const key = note;
    return (<StyledKey
        onMouseDown={() => playNote(audioContextWrapper, { key, octave })}
        onMouseLeave={() => stopNote(audioContextWrapper, { key, octave })}
        onMouseUp={() => stopNote(audioContextWrapper, { key, octave })}
        onMouseEnter={() => isMouseDown && playNote(audioContextWrapper, { key, octave })}
    >{key}</StyledKey>)
}

export default Key