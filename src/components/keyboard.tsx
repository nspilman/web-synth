import React, { Dispatch } from 'react';
import notes, { keyNames } from "../data/notes"
import styled from "styled-components";
import Key from "./key";
import ControlPanel from "./controlPanel"
import colors from "../data/colors";
import { useDispatch, useSelector } from 'react-redux';
import { AppState } from '../store/reducers';
import { AudioControllerAction } from '../store/actions';
import { createPlayNoteAction, createStopNoteAction, playNoteAction } from '../store/actions/playNoteActions';

const StyledKeys = styled.ul`
    display: flex;
    margin:1rem 2rem 0 2rem;
    padding-inline-start: unset;
    border-top:1rem solid ${colors.brown};
    border-right:.5rem solid ${colors.brown};
    border-left:.5rem solid ${colors.brown};
    background-color:${colors.gray};
`

const StyledKeyboard = styled.div`
    padding-top:1rem;
    border-top:3rem solid ${colors.brown};
    border-radius:2rem 2rem 0 0 ;
    position:relative;
    background: linear-gradient(180deg, rgba(121,75,75,1) 0%, rgba(255,155,36,1) 98%, rgba(44,36,23,1) 100%);
`
function Keyboard() {
    const notes = useSelector((state: AppState) => state.isPlaying);
    const dispatch = useDispatch<Dispatch<playNoteAction>>();

    const triggerStateChange = (noteToTrigger: keyNames, actionCreator: (changingValue: keyNames) => playNoteAction) => {
        dispatch(actionCreator(noteToTrigger))
    }
    
    const notesArray = Array.from(notes.keys())

    const playNote = (pioneer: keyNames) => {
        triggerStateChange(pioneer, createPlayNoteAction)
    }

    const stopNote = (pioneer: keyNames) => {
        triggerStateChange(pioneer, createStopNoteAction)
    }

    return (
        <StyledKeyboard id="Keyboard">
            <ControlPanel />
            <StyledKeys className="keyboard">
                {notesArray.map(note => 
                <Key
                    keyName={note}
                    key={note}
                    playNote={playNote}
                    stopNote={stopNote}
                />)}
            </StyledKeys>
        </StyledKeyboard>
    )
}

export default Keyboard;