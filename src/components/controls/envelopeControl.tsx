import React, { useContext } from 'react';
import styled from "styled-components";
import StyledLabel from "../styled/controlLabels";
import IKeyboardContextSignature from "../../interfaces/IKeyboardContextSignature";
import ControlKnob from "./components/controlKnob"

import { KeyboardContext, UpdateKeyboardContext } from "../../hooks/keyboardContext";

const StyledEnvelopeControl = styled.div`
    display:flex;
    align-items:center;
    justify-content:center;
`

function EnvelopeControl(){
    const state : IKeyboardContextSignature = useContext(KeyboardContext);
    const { audioContextParameters } = state;
    const newAudioContextParameters = {... audioContextParameters};

    const setState = useContext(UpdateKeyboardContext);

    const setAttackMsAndState = (newValue: number) => {
        const newEnvelopeParameters = {... audioContextParameters.envelopeParameters};
        newEnvelopeParameters.attackMs = newValue;
        newAudioContextParameters.envelopeParameters = newEnvelopeParameters;
        setState({ ...state, audioContextParameters: newAudioContextParameters });
    }

    const setDecayMsAndState = (newValue: number) => {
        const newEnvelopeParameters = {... audioContextParameters.envelopeParameters};
        newEnvelopeParameters.decayMs = newValue;
        newAudioContextParameters.envelopeParameters = newEnvelopeParameters;
        setState({ ...state, audioContextParameters: newAudioContextParameters });
    }

    const setSustainAndState = (newValue: number) => {
        const newEnvelopeParameters = {... audioContextParameters.envelopeParameters};
        newEnvelopeParameters.sustain = newValue;
        newAudioContextParameters.envelopeParameters = newEnvelopeParameters;
        setState({ ...state, audioContextParameters: newAudioContextParameters });
    }

    const setReleaseMsAndState = (newValue: number) => {
        const newEnvelopeParameters = {... audioContextParameters.envelopeParameters};
        newEnvelopeParameters.releaseMs = newValue;
        newAudioContextParameters.envelopeParameters = newEnvelopeParameters;
        setState({ ...state, audioContextParameters: newAudioContextParameters });
    }

    const { attackMs, decayMs, sustain, releaseMs } = state.audioContextParameters.envelopeParameters;
    return (
        <StyledEnvelopeControl>
            <StyledLabel>
                ENVELOPE
            </StyledLabel>
            <StyledLabel>
                ATTACK
            </StyledLabel>
            <ControlKnob
                min={ 1 } 
                max={ 2000 } 
                value={ attackMs }
                setValue={ setAttackMsAndState }
            />
            <StyledLabel>
                DECAY
            </StyledLabel>
            <ControlKnob 
            min={ 0 }
            max={ 2000 } 
            value={ decayMs }
            setValue={ setDecayMsAndState }
            />
            <StyledLabel>
                        SUSTAIN
            </StyledLabel>
            <ControlKnob 
            min = { 0 } 
            max = { 1000 } 
            value = { sustain }
            setValue = { setSustainAndState }
             />
            <StyledLabel>
                        RELEASE
            </StyledLabel>
            <ControlKnob  
            min = { 1 } 
            max = { 2000 } 
            value = { releaseMs }
            setValue = { setReleaseMsAndState }
            /> 
        </StyledEnvelopeControl>
    )
}

export default EnvelopeControl