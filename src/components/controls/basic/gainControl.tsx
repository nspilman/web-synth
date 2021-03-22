import React, { useContext, useState, useEffect } from 'react';
import { KeyboardContext } from "../../../hooks/keyboardContext";
import styled from "styled-components";
import StyledLabel from "../../styled/controlLabels";
import StyledButton from "../../styled/controlButton";
import IKeyboardContextSignature from "../../../interfaces/IKeyboardContextSignature";
import localStorageService from "../../../services/localStorageService";

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
    const localStorageKey = 'gain';
    const state : IKeyboardContextSignature = useContext(KeyboardContext);
    const { audioContextWrapper } = state;

    let initialGain = localStorageService.getNumberByKey(localStorageKey) ?? .2;
    const [gain, setGain] = useState(initialGain);

    useEffect(() : void=> {
        audioContextWrapper.setGain(gain);
        localStorageService.setValueByKey(localStorageKey, gain.toString())
    })

    const decrementGain = () => {
        const newValue = (gain - gainStep < minGain) ? minGain : gain - gainStep;
        setGain(newValue)
    }

    const incrementGain = () => {
        const newValue = (gain + gainStep > maxGain) ? maxGain : gain + gainStep;
        setGain(newValue)
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