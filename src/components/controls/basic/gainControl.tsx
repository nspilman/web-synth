import React, { Dispatch } from 'react';
import styled from "styled-components";
import StyledLabel from "../../styled/controlLabels";
import StyledButton from "../../styled/controlButton";
import { AudioControllerAction, basicActionTypes } from "../../../store/actions/audioControllerAction";
import { useSelector, useDispatch } from 'react-redux';
import { AppState } from "../../../store/reducers";

const StyledGainControl = styled.div`
    display:flex;
    flex-direction:column;
    width:200px;
    align-items:center;
`

const minGain = 0;
const maxGain = 1;
const gainStep = 0.1;

function GainControl() {
    const { audioContext, basic } = useSelector((state: AppState) => state);
    const dispatch = useDispatch<Dispatch<AudioControllerAction>>();
    const { gain } = basic;

    const decrementGain = () => {
        const newGain = (gain - gainStep < minGain) ? minGain : gain - gainStep;
        const payload: AudioControllerAction = {
            type: basicActionTypes.SET_GAIN,
            payload: newGain,
            setAudioController: () => audioContext.setGain(newGain),
        }
        dispatch(payload)
    }

    const incrementGain = () => {
        const newGain = (gain + gainStep > maxGain) ? maxGain : gain + gainStep;
        const payload: AudioControllerAction = {
            type: basicActionTypes.SET_GAIN,
            payload: newGain,
            setAudioController: () => audioContext.setGain(newGain),
        }
        dispatch(payload)
    }

    return (
        <StyledGainControl id="GainControl">
            <StyledLabel>GAIN : {(gain * 10).toFixed(0)}</StyledLabel>
            <div className='octave-buttons-wrapper'
                style={{ flexDirection: 'row', display: 'flex' }}
            >
                <StyledButton className="lower-octave"
                    onClick={(): void => decrementGain()}
                >
                    -
            </StyledButton>
                <StyledButton className="upper-octave"
                    onClick={(): void => incrementGain()}
                >
                    +
            </StyledButton>
            </div>
        </StyledGainControl>
    )
}

export default GainControl