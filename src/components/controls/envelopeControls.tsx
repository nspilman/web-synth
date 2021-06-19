import React from 'react';
import { useSelector } from 'react-redux';
import { AppState } from "../../store/reducers";
import { StyledControl, StyledLabel } from "../styled/control/index";
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
import { controlState } from '../controlPanel';

function EnvelopeControl({ triggerStateChange }: controlState) {
    const { attackMs, decayMs, sustain, releaseMs } = useSelector((state: AppState) => state.envelope);

    return (
        <StyledControl>
            <DialControl
                parameters={envelopeAttackParameters}
                value = {attackMs}
                setValue={(value) => triggerStateChange(value, createSetAttackMs)}
            />
            <DialControl
                parameters={envelopeDecayParameters}
                value = {decayMs}
                setValue={(value) => triggerStateChange(value, createSetDecayMs)}
            />
            <DialControl
                parameters={envelopeSustainParameters}
                value = {sustain}
                setValue={(value) => triggerStateChange(value, createSetSustain)}
            />
            <DialControl
                parameters={envelopeReleaseParameters}
                value = {releaseMs}
                setValue={(value) => triggerStateChange(value, createSetRelease)}
            />
        </StyledControl>
    )
}

export default EnvelopeControl