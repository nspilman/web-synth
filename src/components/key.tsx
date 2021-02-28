import styled from "styled-components";
import React, { useContext, useState } from 'react';
import stopNote from '../hooks/stopNote';
import playNote from '../hooks/playNote';
import keyboardToNoteHash from "../data/keyboardToNoteHash"

import { KeyboardContext } from "../hooks/keyboardContext";

const playingNoteBackgroundColor = 'rgb(90,20,20)';

interface StyledKeyProps {
    isPlaying : boolean,
}

const StyledKey = styled.li`
    display:flex;
    position:relative;
    float:left;
    align-items:center;
    justify-content:center;
    &::selection{
        background: transparent;
    }
`

const StyledNatural = styled(StyledKey)`
    height: 14rem;
    width: 8rem;
    background-color:${(props: StyledKeyProps) => props.isPlaying ? playingNoteBackgroundColor : 'rgb(250,250,250)'};
    color:${(props: StyledKeyProps) => props.isPlaying ? 'rgb(230,230,230)' : 'rgb(90,20,20)'};
    z-index: 1;
    border:1px rgb(200,200,200) solid;
    &:hover{
        background-color:${(props: StyledKeyProps) => props.isPlaying ? playingNoteBackgroundColor : 'rgb(230,230,230)'};
    }
`

const StyledFlat = styled(StyledKey)`
    height: 7rem;
    width: 4rem;
    background-color: ${(props: StyledKeyProps) => props.isPlaying ? playingNoteBackgroundColor :'rgb(20,20,20)'};
    color:${(props: StyledKeyProps) => props.isPlaying ? 'rgb(230,230,230)' : 'rgb(0,0,0)'};
    margin:0 -2em;
    z-index: 2;
    &:hover{
        background-color:${(props: StyledKeyProps) => props.isPlaying ? playingNoteBackgroundColor: 'rgb(170,120,100)'};
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
  
    const parseAndPlayKeyCommand = ({key} : KeyboardEvent) => {
        const triggeredNote = keyboardToNoteHash[key];
        if(note === triggeredNote){
            playAndSetPlaying(note)
        }
    }

    const parseAndStopKeyCommand = ({key} : KeyboardEvent) => {
        const note = keyboardToNoteHash[key];
        if(note){
            stopAndSetStopped(note)
        }
    }

    const playAndSetPlaying = (note : string) => {
        setIsPlaying(true)
        playNote(audioContextWrapper, note)
    }

    const stopAndSetStopped = ( note : string) => {
        stopNote(audioContextWrapper, note)
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
            onMouseEnter : () => isMouseDown ?? playAndSetPlaying ( note ),
        },
        note)
        )
}

export default Key