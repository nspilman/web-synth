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
    key:string,
    octave: number
}

interface KeyProps {
    playNote: (audioContextWrapper : any, note: Note) => void,
    stopNote: (audioContextWrapper : any, note: Note) => void,
    note : {
        key:string,
        octave:number
    }
    audioContextWrapper: any,
    isMouseDown: boolean,
}

function Key({playNote, stopNote, note, audioContextWrapper, isMouseDown}: KeyProps){
    const { key, octave } = note;
    return (<StyledKey
        onMouseDown ={()=> playNote(audioContextWrapper,{key, octave})}
        onMouseLeave = {()=>stopNote(audioContextWrapper,{key,octave})}
        onMouseUp = {()=>stopNote(audioContextWrapper,{key, octave})}
        onMouseEnter = {() => isMouseDown && playNote(audioContextWrapper,{key, octave}) }
    >{key}</StyledKey>)
}

export default Key