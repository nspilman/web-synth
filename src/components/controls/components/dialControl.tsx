
import React from 'react'
import StyledLabel from "../../styled/controlLabels";
import ControlKnob from "./controlKnob";

type Props = {
    parameters : {
        min : number,
        max: number,
        title: string,
        factor?: number
    },
    value: number,
    setValue : (value: number) => void;
}

function DialControl(props : Props){
    const { min, 
            max, 
            title,
            factor
        } = props.parameters;
    
    const { value, setValue } = props;
    const usableFactor = factor ?? 1;

    const localSetvalue = (value: number) =>{
         setValue(value / usableFactor)
    }

    return( 
        <div>
            <StyledLabel>
                {title}
            </StyledLabel>
            <ControlKnob
                min={ min * usableFactor }
                max={ max * usableFactor }
                value={ value * usableFactor }
                setValue={ localSetvalue }
            />
        </div>
    )
}

export default DialControl;