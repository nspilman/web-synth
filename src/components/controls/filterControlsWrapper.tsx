import React, { Dispatch } from 'react';
import styled from "styled-components";
import StyledLabel from "../styled/controlLabels";
import DialControl from "./components/dialControlRedux";
import FilterTypeControl from "./filter/filterTypeControl";
import { AppState } from "../../store/reducers";
import { useSelector, useDispatch } from 'react-redux';
import { AudioControllerAction, filterActionTypes } from "../../store/actions/audioControllerAction";

import {
    filterFrequencyParameters,
    filterQParameters,
} from "../../data/dialControlParmeters"

const StyledFilterControl = styled.div`
    display:flex;
    align-items:center;
    justify-content:center;
`

function FilterControl() {
    const { freq, q } = useSelector((state: AppState) => state.filter);
    const { audioContext } = useSelector((state: AppState) => state);
    const dispatch = useDispatch<Dispatch<AudioControllerAction>>();

    const setFreq = (freq: number) => {
        const payload: AudioControllerAction = {
            type: filterActionTypes.SET_FREQ,
            payload: freq,
            setAudioController: () => audioContext.setFilterFreq(freq / (filterFrequencyParameters.factor ?? 1)),
        }
        dispatch(payload)
    }

    const setQ = (q: number) => {
        const payload: AudioControllerAction = {
            type: filterActionTypes.SET_Q,
            payload: q,
            setAudioController: () => audioContext.setFilterQ(q / (filterFrequencyParameters.factor ?? 1)),
        }
        dispatch(payload)
    }
    return (
        <StyledFilterControl>
            <StyledLabel>
                FILTER
            </StyledLabel>
            <FilterTypeControl/>
            <DialControl
                parameters={{
                    min: filterFrequencyParameters.min,
                    max: filterFrequencyParameters.max,
                    title: "FREQ",
                    value: freq,
                }}
                setValue={(value) => setFreq(value)}
            />
            <DialControl
                parameters={{
                    min: filterQParameters.min,
                    max: filterQParameters.max,
                    title: "Q",
                    value: q
                }}
                setValue={(value) => setQ(value)}
            />
        </StyledFilterControl>
    )
}

export default FilterControl