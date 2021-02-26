import React, { useContext } from 'react';
import { KeyboardContext, UpdateKeyboardContext } from "../../hooks/keyboardContext";
import styled from "styled-components";
import StyledLabel from "../styled/controlLabels";
import StyledButton from "../styled/controlButton";

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
    const state = useContext(KeyboardContext);
    const setState = useContext(UpdateKeyboardContext);

    const setGainAndState = (newValue: number) => {
        setState({ ...state, gain: newValue })
    }

    const { gain } = state;

    const decrementGain = () => {
        const newValue = (gain - gainStep < minGain) ? minGain : gain - gainStep;
        setGainAndState(newValue)
    }

    const incrementGain = () => {
        const newValue = (gain + gainStep > maxGain) ? maxGain : gain + gainStep;
        setGainAndState(newValue)
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