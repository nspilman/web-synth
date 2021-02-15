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
    setOctave: (octave: number) => void,
    curOctave: any
}

const minOctave = 0;
const maxOctave = 8;

function decrementOctave(curOctave : number) {
    if (curOctave - 1 < minOctave) {
        return minOctave;
    }

    return curOctave - 1;
}

function incrementOctave(curOctave : number) {
    if (curOctave + 1 > maxOctave) {
        return maxOctave;
    }

    return curOctave + 1;
}

function OctaveControl({setOctave, curOctave}: OctaveControlProps){
    return (
        <div id="OctaveControl">
            <StyledOctaveControl className="lower-octave"
                onClick={() => setOctave(decrementOctave(curOctave))}
            >
                Octave -
            </StyledOctaveControl>
            <StyledOctaveControl className="upper-octave"
                onClick={() => setOctave(incrementOctave(curOctave))}
            >
                Octave +
            </StyledOctaveControl>
        </div>
    )
}

export default OctaveControl