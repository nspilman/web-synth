import React, { Dispatch } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { AppState } from "../../store/reducers";
import styled from "styled-components";
import StyledLabel from "../styled/controlLabels";
import DialControl from "./components/dialControl"
import {
    envelopeAttackParameters,
    envelopeDecayParameters,
    envelopeReleaseParameters,
    envelopeSustainParameters
} from "../../data/dialControlParmeters";
import { 
    createSetAttackMs, 
    createSetDecayMs, 
    createSetRelease, 
    createSetSustain 
} from "../../store/actions/envelopeActions"; 
import { AudioControllerAction } from "../../store/actions"

const StyledEnvelopeControl = styled.div`
    display:flex;
    align-items:center;
    justify-content:center;
`

function EnvelopeControl() {
    const { attackMs, decayMs, sustain, releaseMs } = useSelector((state: AppState) => state.envelope);
    const dispatch = useDispatch<Dispatch<AudioControllerAction>>();

    const setAttackMs = (attackMs: number) => {
        const payload : AudioControllerAction = createSetAttackMs(attackMs)
        dispatch(payload);
    }

    const setDecayMs = (decayMs: number) => {
        const payload: AudioControllerAction = createSetDecayMs(decayMs)
        dispatch(payload);
    }

    const setSustain = (sustain: number) => {
        const payload: AudioControllerAction = createSetSustain(sustain);
        dispatch(payload);
    }

    const setReleaseMs = (releaseMs: number) => {
        const payload: AudioControllerAction = createSetRelease(releaseMs);
        dispatch(payload);
    }

    return (
        <StyledEnvelopeControl>
            <StyledLabel>
                ENVELOPE
            </StyledLabel>
            <DialControl
                parameters={envelopeAttackParameters}
                value = {attackMs}
                setValue={(value) => setAttackMs(value)}
            />
            <DialControl
                parameters={envelopeDecayParameters}
                value = {decayMs}
                setValue={(value) => setDecayMs(value)}
            />
            <DialControl
                parameters={envelopeSustainParameters}
                value = {sustain}
                setValue={(value) => setSustain(value)}
            />
            <DialControl
                parameters={envelopeReleaseParameters}
                value = {releaseMs}
                setValue={(value) => setReleaseMs(value)}
            />
        </StyledEnvelopeControl>
    )
}

export default EnvelopeControl