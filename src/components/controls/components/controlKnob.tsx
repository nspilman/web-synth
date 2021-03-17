import React, { useState, useEffect } from 'react'
import { HighContrast } from 'react-dial-knob'
import colors from "../../../data/colors";

interface ControlKnobProps {
    value : number,
    setValue : (newValue : number) => void;
    max? : number,
    min? : number,
    step? : number,
    diameter? : number
}

export default function ControlKnob({
    value, 
    setValue, 
    max = 10, 
    min = 0,
    step = 1,
    diameter = 40
} : ControlKnobProps) {
    const [localValue, setLocalValue] = useState(value);
    useEffect(() => {
        setValue(localValue)
    },[localValue])
    return <HighContrast
        diameter={diameter}
        min={min}
        max={max}
        step={step}
        value={localValue}
        theme={{
            defaultColor: colors.brown,
            activeColor: colors.hoverColor
        }}
        jumpLimit={.1}
        onValueChange={(newValue) => setLocalValue(newValue)}
        ariaLabelledBy={'controlKnob'}
    >
    </HighContrast>
}