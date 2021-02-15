import styled from "styled-components";
import React from 'react';

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
    octave: number,
    wave: string
}

interface KeyProps {
    playNote: (audioContextWrapper : any, note: Note) => void,
    stopNote: (audioContextWrapper : any, note: Note) => void,
    note : {
        key: string,
        octave: number,
        wave: string
    }
    audioContextWrapper: any,
    isMouseDown: boolean,
}

function Key({playNote, stopNote, note, audioContextWrapper, isMouseDown}: KeyProps){
    const { key, octave, wave } = note;
    return (<StyledKey
        onMouseDown ={()=> playNote(audioContextWrapper,{key, octave, wave})}
        onMouseLeave = {()=>stopNote(audioContextWrapper,{key,octave, wave})}
        onMouseUp = {()=>stopNote(audioContextWrapper,{key, octave, wave})}
        onMouseEnter = {() => isMouseDown && playNote(audioContextWrapper,{key, octave, wave}) }
    >{key}</StyledKey>)
}

export default Key