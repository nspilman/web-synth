import React from 'react';
import styled from "styled-components";

import OctaveControl from './controls/octaveControl';
import WaveControl from './controls/waveControl';
import GainControl from "./controls/gainControl";
import DistortionControl from "./controls/distortionControl";
import FilterControl from './controls/filterControl';
import OscillatorsControl from './controls/oscillatorsControl';

const StyledControlPanel = styled.div`
    display:flex;
    align-items: start;
    justify-content:center;
`
function ControlPanel() {
    return (
        <StyledControlPanel>
            <div>
                <OctaveControl />
                <WaveControl />
            </div>
            <OscillatorsControl />
            <FilterControl />
            <div>
                <DistortionControl />
                <GainControl />
            </div>



        </StyledControlPanel>
    )
}

export default ControlPanel;