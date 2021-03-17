import React, { useContext } from 'react';
import styled from "styled-components";
import StyledLabel from "../styled/controlLabels";
import IKeyboardContextSignature from "../../interfaces/IKeyboardContextSignature";
import ControlKnob from "./components/controlKnob";

import { KeyboardContext, UpdateKeyboardContext } from "../../hooks/keyboardContext";

const StyledDistortionControl = styled.div`
    display:flex;
    align-items:center;
    justify-content:center;
`

function FilterControl(){
    const state : IKeyboardContextSignature = useContext(KeyboardContext);
    const setState = useContext(UpdateKeyboardContext);

    const { audioContextParameters } = state;
    const { distortionAmount } = audioContextParameters;

    const setDistortionAmountAndState = (newValue: number) => {
        const newAudioContextParameters = {... audioContextParameters};
        newAudioContextParameters.distortionAmount = newValue;
        setState({ ...state, audioContextParameters: newAudioContextParameters });
    }

    return (
        <StyledDistortionControl>
            <StyledLabel>DISTORTION</StyledLabel>
            <ControlKnob
                value = { distortionAmount }
                setValue = { setDistortionAmountAndState }
            />
        </StyledDistortionControl>
    )
}

export default FilterControl