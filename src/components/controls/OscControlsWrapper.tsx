import React, { Dispatch } from 'react';
import styled from "styled-components";
import OscillatorCountControl from "./oscillator/oscillatorCountControl"
import DialControl from "./components/dialControl"
import { AppState } from "../../store/reducers";
import { useSelector, useDispatch } from 'react-redux';
import { AudioControllerAction, createSetNoise, createSetOscDetune } from "../../store/actions/audioControllerAction";

import { 
    noiseLevelParameters, 
    oscDetuneParameters, 
} from "../../data/dialControlParmeters";

const StyledOscillatorsControl = styled.div`
    display:flex;
    align-items:center;
`

function OscillatorsControl() {
    const { detune, noiseGain } = useSelector((state: AppState) => state.oscillator);
    const dispatch = useDispatch<Dispatch<AudioControllerAction>>();

    const setDetune = (detune: number) => {
        const payload: AudioControllerAction = createSetOscDetune(detune)
        dispatch(payload)
    }

    const setNoise = (noise: number) => {
        const payload: AudioControllerAction = createSetNoise(noise);
        dispatch(payload)
    }

    return (
        <StyledOscillatorsControl id="OscillatorsControl">
            <OscillatorCountControl/>
            <DialControl
               parameters={oscDetuneParameters}
               value={detune}
               setValue={(value) => setDetune(value)} />
         <DialControl
               parameters={noiseLevelParameters}
               value={noiseGain}
               setValue={(value) => setNoise(value)} />
        </StyledOscillatorsControl>
    )
}

export default OscillatorsControl