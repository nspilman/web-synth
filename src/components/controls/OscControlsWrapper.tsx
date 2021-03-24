import React, { useContext } from 'react';
import IKeyboardContextSignature from '../../interfaces/IKeyboardContextSignature';
import { KeyboardContext } from "../../hooks/keyboardContext";
import styled from "styled-components";
import OscillatorCountControl from "./oscillator/oscillatorCountControl"
import DialControl from "./components/dialControl"
import { 
    noiseLevelParameters, 
    oscDetuneParameters, 
} from "../../data/dialControlParmeters"

const StyledOscillatorsControl = styled.div`
    display:flex;
    align-items:center;
`

function OscillatorsControl() {
    const { audioContextWrapper } : IKeyboardContextSignature = useContext(KeyboardContext)
    return (
        <StyledOscillatorsControl id="OscillatorsControl">
            <OscillatorCountControl/>
            <DialControl
                parameters={oscDetuneParameters}
                setValue = {(newDetune) => audioContextWrapper.setOscillatorUnisonDetune(newDetune)}
            />
            <DialControl
                parameters={noiseLevelParameters}
                setValue = {(newNoiseGain) => audioContextWrapper.setNoiseGain(newNoiseGain)}
            />
        </StyledOscillatorsControl>
    )
}

export default OscillatorsControl