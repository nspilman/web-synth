import React, { useContext } from 'react';
import styled from "styled-components";
import DialControl from "./components/dialControl"
import OctaveControl from './basic/octaveControl';
import WaveControl from './basic/waveControl';
import GainControl from "./basic/gainControl";

import { 
    distortionParameters, 
} from "../../data/dialControlParmeters"
import { KeyboardContext } from "../../hooks/keyboardContext";
import IKeyboardContextSignature from '../../interfaces/IKeyboardContextSignature';

const StyledEnvelopeControl = styled.div`
    display:flex;
    align-items:center;
    justify-content:center;
`

function BasicControlsWrapper(){
   const { audioContextWrapper } :IKeyboardContextSignature = useContext(KeyboardContext);
   return (
        <StyledEnvelopeControl>
            <WaveControl/>
            <OctaveControl/>
            <GainControl/>
            <DialControl 
                parameters = {distortionParameters}
                setValue = {(newDistortionValue) => audioContextWrapper.setDistortionAmount(newDistortionValue) }
            />
        </StyledEnvelopeControl>
    )
}

export default BasicControlsWrapper