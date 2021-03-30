import React from 'react';
import { StyledControl, StyledLabel } from "../styled/control/";
import DialControl from "./components/dialControl";
import { AppState } from "../../store/reducers";
import { useSelector } from 'react-redux';
import { createSetFilterFreq, createSetFilterQ, createSetFilterType } from "../../store/actions/filterActions";

import {
    filterFrequencyParameters,
    filterQParameters,
    filterTypeParameters,
} from "../../data/dialControlParmeters";
import { controlState } from '../controlPanel';

function FilterControl({ triggerStateChange }: controlState) {
    const { freq, q, typeId } = useSelector((state: AppState) => state.filter);

    return (
        <StyledControl>
            <StyledLabel>
                FILTER
            </StyledLabel>
            <DialControl
                parameters={filterTypeParameters}
                value={typeId}
                setValue={(newTypeId) => triggerStateChange(newTypeId, createSetFilterType)}
            />
            <DialControl
                parameters={filterFrequencyParameters}
                value={freq}
                setValue={(newFreq) => triggerStateChange(newFreq, createSetFilterFreq)}
            />
            <DialControl
                parameters={filterQParameters}
                value={q}
                setValue={(newQ) => triggerStateChange(newQ, createSetFilterQ)}
            />
        </StyledControl>
    )
}

export default FilterControl