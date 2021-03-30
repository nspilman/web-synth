import React, { Dispatch } from 'react';
import styled from "styled-components";
import DialControl from "./components/dialControl"
import { AppState } from "../../store/reducers";
import { useSelector, useDispatch } from 'react-redux';
import { AudioControllerAction } from "../../store/actions";
import { createSetNoise, createSetOscCount, createSetOscDetune } from "../../store/actions/oscillatorActions";

import { 
    noiseLevelParameters, 
    oscCountParameters, 
    oscDetuneParameters, 
} from "../../data/dialControlParmeters";

const StyledOscillatorsControl = styled.div`
    display:flex;
    align-items:center;
`

function OscillatorsControl() {
    const { detune, noiseGain, count } = useSelector((state: AppState) => state.oscillator);
    const dispatch = useDispatch<Dispatch<AudioControllerAction>>();

    const setDetune = (detune: number) => {
        const payload: AudioControllerAction = createSetOscDetune(detune)
        dispatch(payload)
    }

    const setNoise = (noise: number) => {
        const payload: AudioControllerAction = createSetNoise(noise);
        dispatch(payload)
    }

    const setCount = (newCount: number) => {
        const payload: AudioControllerAction = createSetOscCount(newCount);
        dispatch(payload)
    }

    return (
        <StyledOscillatorsControl id="OscillatorsControl">
            <DialControl
               parameters={oscCountParameters}
               value={count}
               setValue={(value) => setCount(value)} />
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