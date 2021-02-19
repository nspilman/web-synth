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

interface KeyProps {
    note: string,
    isMouseDown: boolean,
}

function Key({ note, isMouseDown }: KeyProps) {
    const { audioContextWrapper } = useContext(KeyboardContext);
    return (<StyledKey
        onMouseDown={() => playNote(audioContextWrapper, note )}
        onMouseLeave={() => stopNote(audioContextWrapper, note )}
        onMouseUp={() => stopNote(audioContextWrapper,  note )}
        onMouseEnter={() => isMouseDown && playNote(audioContextWrapper, note )}
    >{note}</StyledKey>)
}

export default Key