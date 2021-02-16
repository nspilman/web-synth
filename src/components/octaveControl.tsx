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

// interface OctaveControlProps {
//     setOctave: (octave: number) => void,
//     curOctave: any
// }

const minOctave = 0;
const maxOctave = 8;

function OctaveControl() {
    const { octave } = useContext(KeyboardContext);
    const updateContext = useContext(UpdateKeyboardContext);

    function decrementOctave() {
        let output: number;
        if (octave - 1 < minOctave) {
            output = minOctave;
        }
        else {
            output = octave - 1;
        }
        updateContext((state: any) => state.octave = output)
    }

    function incrementOctave() {
        let output: number;
        if (octave + 1 > maxOctave) {
            output = maxOctave;
        }
        else {
            output = octave + 1
        }
        updateContext((state: any) => state.octave = output);
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