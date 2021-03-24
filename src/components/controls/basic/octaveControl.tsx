import React, { useContext, useState, useEffect } from 'react';
import { KeyboardContext } from "../../../hooks/keyboardContext";
import styled from "styled-components";
import StyledLabel from "../../styled/controlLabels";
import StyledButton from "../../styled/controlButton";
import IKeyboardContextSignature from "../../../interfaces/IKeyboardContextSignature";
import localStorageService from "../../../services/localStorageService";

const StyledOctaveControl = styled.div`
display:flex;
flex-direction:column;
width:200px;
align-items:center;
`

const minOctave = 0;
const maxOctave = 8;

function OctaveControl() {
    const state : IKeyboardContextSignature = useContext(KeyboardContext);
    const { audioContextWrapper } = state;

    const localStorageKey = 'octave';
    let initialOctave = localStorageService.getNumberByKey(localStorageKey) ?? 4;

    const [octave, setOctave] = useState(initialOctave);

    useEffect(() : void=> {
        audioContextWrapper.octave = octave;
        localStorageService.setValueByKey(localStorageKey, octave.toString())
    })

    const decrementOctave = () => {
        if(octave !== minOctave){
            setOctave(octave - 1)
        }
    }

    const incrementOctave = () => {
        if(octave !== maxOctave){
            setOctave(octave + 1)
        }
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