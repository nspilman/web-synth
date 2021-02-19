import React, { useContext } from 'react';
import { KeyboardContext, UpdateKeyboardContext } from "../hooks/keyboardContext";
import styled from "styled-components";

const StyledOctaveControl = styled.div`
display:flex;
flex-direction:column;
padding:1rem;
width:200px;
align-items:center;
`

const StyledControlButton = styled.div`
    height:2rem;
    width:2rem;
    background-color:rgb(230,230,230);
    margin:.1rem;
    display:flex;
    align-items:center;
    justify-content:center;
    &:hover{
        background-color:rgb(90,20,20);
        color:white;
        cursor:pointer;
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
        <StyledOctaveControl id="OctaveControl">
            <span style = {{fontSize:'1.4rem', color:'rgb(230,230,230)'}}>OCTAVE : {octave}</span>
            <div className = 'octave-buttons-wrapper'
                style={{flexDirection:'row', display:'flex'}}
            >
            <StyledControlButton className="lower-octave"
                onClick={() : void => decrementOctave()}
            >
                 -
            </StyledControlButton>
            <StyledControlButton className="upper-octave"
                onClick={() : void => incrementOctave()}
            >
                 +
            </StyledControlButton>
            </div>
        </StyledOctaveControl>
    )
}

export default OctaveControl