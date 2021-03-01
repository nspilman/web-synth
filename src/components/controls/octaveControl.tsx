import React, { useContext } from 'react';
import { KeyboardContext, UpdateKeyboardContext } from "../../hooks/keyboardContext";
import styled from "styled-components";
import StyledLabel from "../styled/controlLabels";
import StyledButton from "../styled/controlButton";

const StyledOctaveControl = styled.div`
display:flex;
flex-direction:column;
width:200px;
align-items:center;
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
            <StyledLabel>OCTAVE : {octave}</StyledLabel>
            <div className = 'octave-buttons-wrapper'
                style={{flexDirection:'row', display:'flex'}}
            >
            <StyledButton className="lower-octave"
                onClick={() : void => decrementOctave()}
            >
                 -
            </StyledButton>
            <StyledButton className="upper-octave"
                onClick={() : void => incrementOctave()}
            >
                 +
            </StyledButton>
            </div>
        </StyledOctaveControl>
    )
}

export default OctaveControl