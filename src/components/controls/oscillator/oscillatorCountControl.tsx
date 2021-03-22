
import React, { useState, useEffect, useContext } from 'react'
import { KeyboardContext } from "../../../hooks/keyboardContext";
import StyledButton from "../../styled/controlButton";
import IKeyboardContextSignature from "../../../interfaces/IKeyboardContextSignature";
import StyledLabel from "../../styled/controlLabels";
import localStorageService from "../../../services/localStorageService";

function OscillatorCountControl(){
    const localStorageKey = 'numOscillators';
    const { audioContextWrapper }: IKeyboardContextSignature = useContext(KeyboardContext);
    let initialOscCount = localStorageService.getNumberByKey(localStorageKey) ?? 1;
    const [numOscillators, setNumOscillators] = useState(initialOscCount);
    const minNumOscillators = 1; 
    const maxNumOscillators = 2; 

    useEffect(() : void=> {
        audioContextWrapper.setNumOscillators(numOscillators);
        localStorageService.setValueByKey(localStorageKey, numOscillators.toString())
    })

    const decrementNumOscillators = () => {
        if(numOscillators !== minNumOscillators){
            setNumOscillators(numOscillators - 1)
        }
    }

    const incrementNumOscillators = () => {
        if(numOscillators !== maxNumOscillators){
            setNumOscillators(numOscillators + 1)
        }   
    }

    return( 
        <div>
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
        </div>
    )
}

export default OscillatorCountControl;