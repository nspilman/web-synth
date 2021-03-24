
import React, { useState, useEffect, useContext } from 'react'
import StyledLabel from "../../styled/controlLabels";
import localStorageService from "../../../services/localStorageService";
import ControlKnob from "./controlKnob";
import IDialControlParameters from "../../../interfaces/IDailControlParameters"

type Props = {
    parameters : IDialControlParameters,
    setValue : (value: number) => void;
}

function DialControl(props : Props){
    const { min, 
            max, 
            localStorageKey, 
            title, 
            defaultValue, 
            factor } = props.parameters;
    
    const { setValue } = props;
                
    let intialState = localStorageService.getNumberByKey(localStorageKey) ?? defaultValue;
    const [state, setState] = useState(intialState);

    useEffect(function(): void{
        setValue(state / (factor ?? 1));
        localStorage.setItem(localStorageKey, state.toString())
    })

    return( 
        <div>
            <StyledLabel>
                {title}
            </StyledLabel>
            <ControlKnob
                min={ min }
                max={ max }
                value={state}
                setValue={setState}
            />
        </div>
    )
}

export default DialControl;