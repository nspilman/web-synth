import React, { Dispatch } from 'react';
import styled from "styled-components";
import StyledLabel from "../styled/controlLabels";
import DialControl from "./components/dialControl";
import { AppState } from "../../store/reducers";
import { useSelector, useDispatch } from 'react-redux';
import { AudioControllerAction } from "../../store/actions";
import { createSetFilterFreq, createSetFilterQ, createSetFilterType } from "../../store/actions/filterActions";

import {
    filterFrequencyParameters,
    filterQParameters,
    filterTypeParameters,
} from "../../data/dialControlParmeters";

const StyledFilterControl = styled.div`
    display:flex;
    align-items:center;
    justify-content:center;
`

function FilterControl() {
    const { freq, q, type } = useSelector((state: AppState) => state.filter);
    const dispatch = useDispatch<Dispatch<AudioControllerAction>>();

    const setFreq = (freq: number) => {
        const payload: AudioControllerAction = createSetFilterFreq(freq);
        dispatch(payload)
    }

    const setQ = (q: number) => {
        const payload: AudioControllerAction = createSetFilterQ(q);
        dispatch(payload)
    }

    const setType = (typeId: number) => {
        const payload : AudioControllerAction = createSetFilterType(typeId);
        dispatch(payload);
    }
    return (
        <StyledFilterControl>
            <StyledLabel>
                FILTER
            </StyledLabel>
            <DialControl
                parameters={filterTypeParameters}
                value={type}
                setValue={(value) => setType(value)}
            />
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