import React, { useState } from 'react';
import styled from "styled-components";

import FilterControlsWrapper from './controls/filterControlsWrapper';
import OscControlsWrapper from './controls/OscControlsWrapper';
import EnvelopeControlsWrapper from './controls/envelopeControlsWrapper';
import BasicControlsWrapper from "./controls/basicControlsWrapper"
import colors from "../data/colors";

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
    background-color: ${(props: StyledTabButtonProps) => props.isSelected ? colors.offWhite : colors.brown};
    color: ${(props: StyledTabButtonProps) => props.isSelected ? colors.brown : colors.offWhite};
    border-radius:10px;
    :hover{
        background-color:${(props: StyledTabButtonProps) => !props.isSelected && colors.hoverColor};
    }
    `

const StyledTab = styled.div`
    height:50px;
    padding-top:1rem;
`
const StyledControlsLabel = styled.span`
    color:${colors.offWhite};
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
                return <BasicControlsWrapper/>;
              break;
            case panelTabs.envelope:
                return <EnvelopeControlsWrapper />
                break;
            case panelTabs.oscillator:
                return <OscControlsWrapper />
                break;
            case panelTabs.filter:
                return <FilterControlsWrapper />
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
                        key={ tab }
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