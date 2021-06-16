import React, { Dispatch, useState } from 'react';

import FilterControls from './controls/filterControls';
import EnvelopeControls from './controls/envelopeControls';
import OscControls from "./controls/oscControls";
import BasicControls from "./controls/basicControls"
import { useDispatch } from 'react-redux';
import { AudioControllerAction } from '../store/actions';
import {
    StyledControlPanel,
    StyledBrandLabel,
    StyledTab,
    StyledTabButton,
    StyledTabs
} from "./styled/controlPanel/";

enum panelTabs {
    basic = 'basic',
    envelope = 'envelope',
    oscillator = 'oscillator',
    filter = 'filter'
}

export type controlState = {
    triggerStateChange: (newValue: number,
        stateChangeActionGenerator: (changingValue: number) => AudioControllerAction) => void;
}

function ControlPanel() {
    const dispatch = useDispatch<Dispatch<AudioControllerAction>>();
    const triggerStateChange = (changingValue: number, actionCreator: (changingValue: number) => AudioControllerAction) => {
        dispatch(actionCreator(changingValue))
    }

    const [currentTab, setTab] = useState(panelTabs.basic)
    const renderCurrentTab = (): JSX.Element => {
        switch (currentTab) {
            case panelTabs.basic:
                return <BasicControls
                    triggerStateChange={triggerStateChange}
                />;
                break;
            case panelTabs.envelope:
                return <EnvelopeControls
                    triggerStateChange={triggerStateChange}
                />
                break;
            case panelTabs.oscillator:
                return <OscControls
                    triggerStateChange={triggerStateChange}
                />
                break;
            case panelTabs.filter:
                return <FilterControls
                    triggerStateChange={triggerStateChange}
                />
            default:
                return <div>Error Loading Controls</div>
        }
    }
    return (
        <StyledControlPanel>
            <StyledBrandLabel>
                    N8-JS Web Synth
            </StyledBrandLabel>
            <StyledTabs id="tabs">
                {
                    Object.keys(panelTabs).map(
                        tab => <StyledTabButton
                            key={tab}
                            isSelected={tab === currentTab}
                            onClick={() => setTab(tab as panelTabs)}
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