import React, { useContext } from 'react';
import { KeyboardContext, UpdateKeyboardContext } from "../../hooks/keyboardContext";
import styled from "styled-components";
import StyledLabel from "../styled/controlLabels";
import StyledButton from "../styled/controlButton";
import ControlKnob from "./components/controlKnob"
import IKeyboardContextSignature from "../../interfaces/IKeyboardContextSignature";

const StyledOscillatorsControl = styled.div`
    display:flex;
    align-items:center;
`

const minNumOscillators = 1;
const maxNumOscillators = 2;

function OscillatorsControl() {
    const state: IKeyboardContextSignature = useContext(KeyboardContext);
    const setState = useContext(UpdateKeyboardContext);
    const { audioContextParameters } = state;
    const newAudioContextParameters = { ...audioContextParameters };
    const newOscillatorParameters = { ...newAudioContextParameters.oscillatorParameters }
    const { noiseGain } = audioContextParameters;
    const { numOscillators, oscillatorUnisonDetune } = audioContextParameters.oscillatorParameters;

    const decrementNumOscillators = () => {
        const newValue = (numOscillators - 1 < minNumOscillators) ? minNumOscillators : numOscillators - 1;
        newOscillatorParameters.numOscillators = newValue;
        newAudioContextParameters.oscillatorParameters = newOscillatorParameters;
        setState({ ...state, audioContextParameters: newAudioContextParameters })
    }

    const incrementNumOscillators = () => {
        const newValue = (numOscillators + 1 > maxNumOscillators) ? maxNumOscillators : numOscillators + 1;
        newOscillatorParameters.numOscillators = newValue;
        newAudioContextParameters.oscillatorParameters = newOscillatorParameters;
        setState({ ...state, audioContextParameters: newAudioContextParameters })
    }

    const setOscillatorUnisonDetuneAndState = (newValue: number) => {
        newOscillatorParameters.oscillatorUnisonDetune = newValue;
        newAudioContextParameters.oscillatorParameters = newOscillatorParameters;
        setState({ ...state, audioContextParameters: newAudioContextParameters })
    }

    const setNoiseGainState = (newGain: number) => {
        newAudioContextParameters.noiseGain = newGain;
        setState({ ...state, audioContextParameters: newAudioContextParameters });
    }

    return (
        <StyledOscillatorsControl id="OscillatorsControl">
            <StyledLabel>OSCILLATORS : {numOscillators}</StyledLabel>
            <div className='num-oscillators-buttons-wrapper'
                style={{ flexDirection: 'row', display: 'flex' }}
            >
                <StyledButton className="lower-num-oscillators"
                    onClick={(): void => decrementNumOscillators()}
                >
                    -
                </StyledButton>
                <StyledButton className="upper-num-oscillators"
                    onClick={(): void => incrementNumOscillators()}
                >
                    +
                </StyledButton>
            </div>
            <br />
            <StyledLabel>
                UNISON DETUNE
            </StyledLabel>
            <ControlKnob
                min={0}
                max={100}
                value={oscillatorUnisonDetune}
                setValue={setOscillatorUnisonDetuneAndState}
            />
            <br />
            <StyledLabel>
                NOISE LEVEL
            </StyledLabel>
            <ControlKnob
                min={0}
                max={100}
                step={1}
                value={noiseGain}
                setValue={setNoiseGainState}
            />
        </StyledOscillatorsControl>
    )
}

export default OscillatorsControl