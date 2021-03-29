
import React from 'react'
import StyledLabel from "../../styled/controlLabels";
import ControlKnob from "./controlKnob";
import IDialControlParameters from "../../../interfaces/IDailControlParameters"

type Props = {
    parameters : IDialControlParameters,
    value: number,
    setValue : (value: number) => void;
}

function DialControl(props : Props){
    const { min, 
            max, 
            title,
            factor = 1
        } = props.parameters;
    
    const { value, setValue } = props;

    const localSetvalue = (value: number) =>{
         setValue(value / factor)
    }

    return( 
        <div>
            <StyledLabel>
                {title}
            </StyledLabel>
            <ControlKnob
                min={ min * factor }
                max={ max * factor }
                value={ value * factor }
                setValue={ localSetvalue }
            />
        </div>
    )
}

export default DialControl;