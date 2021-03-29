import React, { Dispatch } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { AppState } from "../../store/reducers";
import { AudioControllerAction, envelopeActionTypes } from "../../store/actions/audioControllerAction";
import styled from "styled-components";
import StyledLabel from "../styled/controlLabels";
import DialControl from "./components/dialControl"
import {
    envelopeAttackParameters,
    envelopeDecayParameters,
    envelopeReleaseParameters,
    envelopeSustainParameters
} from "../../data/dialControlParmeters"

const StyledEnvelopeControl = styled.div`
    display:flex;
    align-items:center;
    justify-content:center;
`

function EnvelopeControl() {
    const { attackMs, decayMs, sustain, releaseMs } = useSelector((state: AppState) => state.envelope);
    const  audioContext  = useSelector((state: AppState) => state.audioContext);
    const dispatch = useDispatch<Dispatch<AudioControllerAction>>();

    const setAttackMs = (attackMs: number) => {
        const payload: AudioControllerAction = {
            type: envelopeActionTypes.SET_ATTACK,
            payload: attackMs,
            setAudioController: () => audioContext.setAttackMs(attackMs),
        }
        dispatch(payload);
    }

    const setDecayMs = (decayMs: number) => {
        const payload: AudioControllerAction = {
            type: envelopeActionTypes.SET_DECAY,
            payload: decayMs,
            setAudioController: () => audioContext.setDecayMs(decayMs),
        }
        dispatch(payload);
    }

    const setSustain = (sustain: number) => {
        const payload: AudioControllerAction = {
            type: envelopeActionTypes.SET_SUSTAIN,
            payload: sustain,
            setAudioController: () => audioContext.setSustain(sustain),
        }
        dispatch(payload);
    }

    const setReleaseMs = (releaseMs: number) => {
        const payload: AudioControllerAction = {
            type: envelopeActionTypes.SET_RELEASE,
            payload: releaseMs,
            setAudioController: () => audioContext.setReleaseMs(releaseMs),
        }
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