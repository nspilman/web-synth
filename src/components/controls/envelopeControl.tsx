import React, { useContext } from 'react';
import styled from "styled-components";
import StyledLabel from "../styled/controlLabels";
import StyledRange from "../styled/controlRange";
import IKeyboardContextSignature from "../../interfaces/IKeyboardContextSignature";

import { KeyboardContext, UpdateKeyboardContext } from "../../hooks/keyboardContext";

const StyledEnvelopeControl = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
`

function EnvelopeControl(){
    const state : IKeyboardContextSignature = useContext(KeyboardContext);
    const { audioContextParameters } = state;
    const newAudioContextParameters = {... audioContextParameters};
    const newEnvelopeParameters = {... audioContextParameters.envelopeParameters};

    const setState = useContext(UpdateKeyboardContext);

    const setAttackMsAndState = (newValue: number) => {
        newEnvelopeParameters.attackMs = newValue;
        newAudioContextParameters.envelopeParameters = newEnvelopeParameters;
        setState({ ...state, audioContextParameters: newAudioContextParameters });
    }

    const setDecayMsAndState = (newValue: number) => {
        newEnvelopeParameters.decayMs = newValue;
        newAudioContextParameters.envelopeParameters = newEnvelopeParameters;
        setState({ ...state, audioContextParameters: newAudioContextParameters });
    }

    const setSustainAndState = (newValue: number) => {
        newEnvelopeParameters.sustain = newValue;
        newAudioContextParameters.envelopeParameters = newEnvelopeParameters;
        setState({ ...state, audioContextParameters: newAudioContextParameters });
    }

    const setReleaseMsAndState = (newValue: number) => {
        newEnvelopeParameters.releaseMs = newValue;
        newAudioContextParameters.envelopeParameters = newEnvelopeParameters;
        setState({ ...state, audioContextParameters: newAudioContextParameters });
    }

    const { attackMs, decayMs, sustain, releaseMs } = state.audioContextParameters.envelopeParameters;

    const setAttackMsFromEvent = (e : React.FormEvent<HTMLInputElement>) => {
        setAttackMsAndState(Number(e.currentTarget.value));
    }

    const setDecayMsFromEvent = (e : React.FormEvent<HTMLInputElement>) => {
        setDecayMsAndState(Number(e.currentTarget.value));
    }

    const setSustainFromEvent = (e : React.FormEvent<HTMLInputElement>) => {
        setSustainAndState(Number(e.currentTarget.value));
    }

    const setReleaseMsFromEvent = (e : React.FormEvent<HTMLInputElement>) => {
        setReleaseMsAndState(Number(e.currentTarget.value));
    }

    return (
        <StyledEnvelopeControl>
            <StyledLabel>
                        ENVELOPE
            </StyledLabel>
            <StyledLabel>
                        ATTACK
            </StyledLabel>
            <StyledRange type='range' id='attack-id' className='attack' min='1' max='2000' value={attackMs}
                onInput={(e) => setAttackMsFromEvent(e)}
            >
            </StyledRange>
            <StyledLabel>
                        DECAY
            </StyledLabel>
            <StyledRange type='range' id='decay-id' className='decay' min='1' max='2000' value={decayMs}
                onInput={(e) => setDecayMsFromEvent(e)}
            >
            </StyledRange>
            <StyledLabel>
                        SUSTAIN
            </StyledLabel>
            <StyledRange type='range' id='sustain-id' className='sustain' min='0' max='1' step='0.01' value={sustain}
                onInput={(e) => setSustainFromEvent(e)}
            >
            </StyledRange>
            <StyledLabel>
                        RELEASE
            </StyledLabel>
            <StyledRange type='range' id='release-id' className='release' min='1' max='2000' value={releaseMs}
                onInput={(e) => setReleaseMsFromEvent(e)}
            >
            </StyledRange>
        </StyledEnvelopeControl>
    )
}

export default EnvelopeControl