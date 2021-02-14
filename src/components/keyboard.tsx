import React from 'react';
import notes from "../data/notes"
import AudioContextWrapper from "../classes/audioContextWrapper";
import styled from "styled-components";
import { symlink } from 'fs';

const Board = styled.div`
    display: flex;
`

const Key = styled.div`
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
`

const audioController = new AudioContextWrapper();

function Keyboard(){
    const octave = 4;
    return (
        <Board className = "keyboard">
        {Object.keys(notes).map(key => <Key
            onMouseDown = {() => audioController.playNote(key,octave)}
            onMouseLeave = {() => audioController.stopNote(key,octave)}
            onMouseUp = {() => audioController.stopNote(key, octave)}
        >{key}</Key>)}
        </Board>
    )
}

export default Keyboard;