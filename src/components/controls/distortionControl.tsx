import React, { useContext } from 'react';
import styled from "styled-components";
import StyledLabel from "../styled/controlLabels";
import StyledRange from "../styled/controlRange";
import IKeyboardContextSignature from "../../interfaces/IKeyboardContextSignature";

import { KeyboardContext, UpdateKeyboardContext } from "../../hooks/keyboardContext";

const StyledDistortionControl = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
`

function FilterControl(){
    const state : IKeyboardContextSignature = useContext(KeyboardContext);
    const setState = useContext(UpdateKeyboardContext);

    const { audioContextParameters } = state;
    const newAudioContextParameters = {... audioContextParameters};

    const setDistortionAmountAndState = (newValue: number) => {
        newAudioContextParameters.distortionAmount = newValue;
        setState({ ...state, audioContextParameters: newAudioContextParameters });
    }

    const { distortionAmount } = audioContextParameters;

    const setDistortionAmountFromEvent = (e : React.FormEvent<HTMLInputElement>) => {
        setDistortionAmountAndState(Number(e.currentTarget.value));
    }

    return (
        <StyledDistortionControl>
            <StyledLabel>DISTORTION</StyledLabel>
            <StyledRange type='range' id='distortion-amount-id' className='distortion-amount' min='0' max='10' value={distortionAmount}
                onInput={(e) => setDistortionAmountFromEvent(e)}
            >
            </StyledRange>
        </StyledDistortionControl>
    )
}

export default FilterControl