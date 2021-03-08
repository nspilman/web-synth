import React, { useState } from 'react';
import styled from "styled-components";

import OctaveControl from './controls/octaveControl';
import WaveControl from './controls/waveControl';
import GainControl from "./controls/gainControl";
import DistortionControl from "./controls/distortionControl";
import FilterControl from './controls/filterControl';
import OscillatorsControl from './controls/oscillatorsControl';
import EnvelopeControl from './controls/envelopeControl';

const StyledControlPanel = styled.div`
    display:flex;
    align-items: center;
    justify-content:center;
    flex-direction:column;
`
const StyledTabs = styled.div`
    display:flex;
`
interface StyledTabButtonProps {
    isSelected : boolean,
}

const StyledTabButton = styled.button`
    padding:.5rem .75rem;
    background-color: ${(props: StyledTabButtonProps) => props.isSelected ? 'rgb(230,230,230)' : 'rgb(90,20,20)'};
    color: ${(props: StyledTabButtonProps) => props.isSelected ? 'rgb(90,20,20)' : 'rgb(230,230,230)'};
    border-radius:10px;
    :hover{
        background-color:${(props: StyledTabButtonProps) => !props.isSelected && 'rgb(170,120,100)'};
    }
    `

const StyledTab = styled.div`
    height:50px;
    padding-top:1rem;
`
const StyledControlsLabel = styled.span`
    color:rgb(230,230,230);
    padding:.5rem .75rem;
    font-weight:bold;
`

enum panelTabs {
    basic = 'basic',
    envelope = 'envelope',
    oscillator = 'oscillator',
    filter = 'filter'
}

function ControlPanel() {
    const [currentTab, setTab] = useState(panelTabs.basic)
    const renderCurrentTab = () : JSX.Element => {
        switch(currentTab) {
            case panelTabs.basic:
                return (
                    <div id = "main" style={{display:'flex'}}>
                    <OctaveControl />
                    <WaveControl />
                    <GainControl />
                    <DistortionControl />
                </div>)
              break;
            case panelTabs.envelope:
                return <EnvelopeControl />
                break;
            case panelTabs.oscillator:
                return <OscillatorsControl />
                break;
            case panelTabs.filter:
                return <FilterControl />
            default:
              return <div>Error Loading Controls</div>
          }
    }
    return (
        <StyledControlPanel>
            <StyledTabs id="tabs">
            <StyledControlsLabel>
                CONTROLS
            </StyledControlsLabel>
                {
                Object.keys(panelTabs).map(
                    tab => <StyledTabButton
                        isSelected = {tab === currentTab}
                        onClick = {() => setTab(tab as panelTabs)}
                    >{tab}</StyledTabButton>
                    )
                }
            </StyledTabs>
            <StyledTab>
                {renderCurrentTab()}
            </StyledTab>
        </StyledControlPanel>
    )
}

export default ControlPanel;