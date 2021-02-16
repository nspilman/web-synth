import React, { useContext } from 'react';
import { KeyboardContext, UpdateKeyboardContext } from "../hooks/keyboardContext";
import styled from "styled-components";

const StyledOctaveControl = styled.div`
    height:5rem;
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

const minOctave = 0;
const maxOctave = 8;

function OctaveControl() {
    const state = useContext(KeyboardContext);
    const { octave } = state;
    const updateContext = useContext(UpdateKeyboardContext);

    const decrementOctave = () => {
        const newValue = (octave - 1 < minOctave) ? minOctave : octave - 1;
        updateContext({...state,octave:newValue})
    }

    const incrementOctave = () => {
        const newValue = (octave + 1 > maxOctave) ? maxOctave : octave + 1;
        updateContext({...state,octave:newValue})
    }

    return (
        <div id="OctaveControl">
            <StyledOctaveControl className="lower-octave"
                onClick={() : void => decrementOctave()}
            >
                Octave -
            </StyledOctaveControl>
            <StyledOctaveControl className="upper-octave"
                onClick={() : void => incrementOctave()}
            >
                Octave +
            </StyledOctaveControl>
        </div>
    )
}

export default OctaveControl