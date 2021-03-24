import React, { useContext } from 'react';
import styled from "styled-components";
import StyledLabel from "../styled/controlLabels";
import DialControl from "./components/dialControl"
import { 
    envelopeAttackParameters, 
    envelopeDecayParameters, 
    envelopeReleaseParameters, 
    envelopeSustainParameters 
} from "../../data/dialControlParmeters"
import { KeyboardContext } from "../../hooks/keyboardContext";
import IKeyboardContextSignature from '../../interfaces/IKeyboardContextSignature';

const StyledEnvelopeControl = styled.div`
    display:flex;
    align-items:center;
    justify-content:center;
`

function EnvelopeControl(){
   const { audioContextWrapper } :IKeyboardContextSignature = useContext(KeyboardContext);
   return (
        <StyledEnvelopeControl>
            <StyledLabel>
                ENVELOPE
            </StyledLabel>
            <DialControl 
                parameters = {envelopeAttackParameters}
                setValue = {(value) => audioContextWrapper.setAttackMs(value) }
            />
            <DialControl 
                parameters = {envelopeDecayParameters}
                setValue = {(value) => audioContextWrapper.setDecayMs(value) }
            />
            <DialControl 
                parameters = {envelopeSustainParameters}
                setValue = {(value) => audioContextWrapper.setSustain(value)}
            />
            <DialControl 
                parameters = {envelopeReleaseParameters}
                setValue = {(value) => audioContextWrapper.setReleaseMs(value)}
            />
        </StyledEnvelopeControl>
    )
}

export default EnvelopeControl