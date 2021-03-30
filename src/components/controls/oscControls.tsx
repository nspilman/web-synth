import React from 'react';
import DialControl from "./components/dialControl"
import { AppState } from "../../store/reducers";
import { useSelector } from 'react-redux';
import { createSetNoise, createSetOscCount, createSetOscDetune } from "../../store/actions/oscillatorActions";

import { 
    noiseLevelParameters, 
    oscCountParameters, 
    oscDetuneParameters, 
} from "../../data/dialControlParmeters";
import { controlState } from '../controlPanel';
import { StyledControl } from '../styled/control';

function OscillatorsControl({ triggerStateChange }: controlState) {
    const { detune, noiseGain, count } = useSelector((state: AppState) => state.oscillator);

    return (
        <StyledControl id="OscillatorsControl">
            <DialControl
               parameters={oscCountParameters}
               value={count}
               setValue={(value) => triggerStateChange(value, createSetOscCount)} />
            <DialControl
               parameters={oscDetuneParameters}
               value={detune}
               setValue={(value) => triggerStateChange(value, createSetOscDetune)} />
         <DialControl
               parameters={noiseLevelParameters}
               value={noiseGain}
               setValue={(value) => triggerStateChange(value, createSetNoise)} />
        </StyledControl>
    )
}

export default OscillatorsControl
