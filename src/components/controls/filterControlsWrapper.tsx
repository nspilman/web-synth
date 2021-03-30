import React, { Dispatch } from 'react';
import styled from "styled-components";
import StyledLabel from "../styled/controlLabels";
import DialControl from "./components/dialControl";
import FilterTypeControl from "./filter/filterTypeControl";
import { AppState } from "../../store/reducers";
import { useSelector, useDispatch } from 'react-redux';
import { AudioControllerAction } from "../../store/actions/";
import { createSetFilterFreq, createSetFilterQ } from "../../store/actions/filterActions";

import {
    filterFrequencyParameters,
    filterQParameters,
} from "../../data/dialControlParmeters";

const StyledFilterControl = styled.div`
    display:flex;
    align-items:center;
    justify-content:center;
`

function FilterControl() {
    const { freq, q } = useSelector((state: AppState) => state.filter);
    const dispatch = useDispatch<Dispatch<AudioControllerAction>>();

    const setFreq = (freq: number) => {
        const payload: AudioControllerAction = createSetFilterFreq(freq);
        dispatch(payload)
    }

    const setQ = (q: number) => {
        const payload: AudioControllerAction = createSetFilterQ(q);
        dispatch(payload)
    }
    return (
        <StyledFilterControl>
            <StyledLabel>
                FILTER
            </StyledLabel>
            <FilterTypeControl/>
            <DialControl
                parameters={filterFrequencyParameters}
                value={freq}
                setValue={(value) => setFreq(value)}
            />
            <DialControl
                parameters={filterQParameters}
                value={q}
                setValue={(value) => setQ(value)}
            />
        </StyledFilterControl>
    )
}

export default FilterControl