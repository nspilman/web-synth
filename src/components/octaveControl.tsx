import React, { useState } from 'react';
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

interface OctaveControlProps {
    setOctave: (octave: any) => void,
    curOctave: any
}

const minOctave = 0;
const maxOctave = 8;

function OctaveControl({setOctave, curOctave}: OctaveControlProps){
    return (
        <div id="OctaveControl">
            <StyledOctaveControl
                onClick={() => setOctave(curOctave - 1 < minOctave ? minOctave : curOctave - 1)}
            >
                Octave -
            </StyledOctaveControl>
            <StyledOctaveControl
                onClick={() => setOctave(curOctave + 1 > maxOctave ? maxOctave : curOctave + 1)}
            >
                Octave +
            </StyledOctaveControl>
        </div>
    )
}

export default OctaveControl