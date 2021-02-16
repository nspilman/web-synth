import styled from "styled-components";
import React, { useContext } from 'react';
import stopNote from '../hooks/stopNote';
import playNote from '../hooks/playNote';

import { KeyboardContext } from "../hooks/keyboardContext";

const StyledKey = styled.div`
    height:10rem;
    width:5rem;
    background-color:grey;
    margin:.1rem;
    display:flex;
    align-items:center;
    justify-content:center;
    &:hover{
        background-color:black;
        color:green;
    }
    &::selection{
        background: transparent;
    }
`

interface Note {
    key: string,
    wave: string,
    octave: number,
}

interface KeyProps {
    note : string,
    isMouseDown: boolean,
}

function Key({note, isMouseDown}: KeyProps){
    const { octave, wave, audioContextWrapper } = useContext(KeyboardContext);
    const  key  = note;
    return (<StyledKey
        onMouseDown ={()=> playNote(audioContextWrapper,{key, octave, wave})}
        onMouseLeave = {()=>stopNote(audioContextWrapper,{key,octave, wave})}
        onMouseUp = {()=>stopNote(audioContextWrapper,{key, octave, wave})}
        onMouseEnter = {() => isMouseDown && playNote(audioContextWrapper,{key, octave, wave}) }
    >{key}</StyledKey>)
}

export default Key