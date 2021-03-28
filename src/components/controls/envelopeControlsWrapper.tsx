import React, { Dispatch } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { AppState } from "../../store/reducers";
import { AudioControllerAction, envelopeActionTypes } from "../../store/actions/audioControllerAction";
import styled from "styled-components";
import StyledLabel from "../styled/controlLabels";
import DialControl from "./components/dialControlRedux"
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
            setAudioController: () => audioContext.setAttackMs(attackMs / (envelopeAttackParameters.factor ?? 1)),
        }
        dispatch(payload);
    }

    const setDecayMs = (decayMs: number) => {
        const payload: AudioControllerAction = {
            type: envelopeActionTypes.SET_DECAY,
            payload: decayMs,
            setAudioController: () => audioContext.setDecayMs(decayMs / (envelopeDecayParameters.factor ?? 1)),
        }
        dispatch(payload);
    }

    const setSustain = (sustain: number) => {
        const payload: AudioControllerAction = {
            type: envelopeActionTypes.SET_SUSTAIN,
            payload: sustain,
            setAudioController: () => audioContext.setSustain(sustain / (envelopeSustainParameters.factor ?? 1)),
        }
        dispatch(payload);
    }

    const setReleaseMs = (releaseMs: number) => {
        const payload: AudioControllerAction = {
            type: envelopeActionTypes.SET_RELEASE,
            payload: releaseMs,
            setAudioController: () => audioContext.setReleaseMs(releaseMs / (envelopeReleaseParameters.factor ?? 1)),
        }
        dispatch(payload);
    }

    return (
        <StyledEnvelopeControl>
            <StyledLabel>
                ENVELOPE
            </StyledLabel>
            <DialControl
                parameters={{
                    min: envelopeAttackParameters.min,
                    max: envelopeAttackParameters.max,
                    title: "ATTACK",
                    value: attackMs
                }}
                setValue={(value) => setAttackMs(value)}
            />
            <DialControl
                parameters={{
                    min: envelopeDecayParameters.min,
                    max: envelopeDecayParameters.max,
                    title: "DECAY",
                    value: decayMs
                }}
                setValue={(value) => setDecayMs(value)}
            />
            <DialControl
                parameters={{
                    min: envelopeSustainParameters.min,
                    max: envelopeSustainParameters.max,
                    title: "SUSTAIN",
                    value: sustain
                }}
                setValue={(value) => setSustain(value)}
            />
            <DialControl
                parameters={{
                    min: envelopeReleaseParameters.min,
                    max: envelopeReleaseParameters.max,
                    title: "RELEASE",
                    value: releaseMs
                }}
                setValue={(value) => setReleaseMs(value)}
            />
        </StyledEnvelopeControl>
    )
}

export default EnvelopeControl