
import React, { useState, useEffect, useContext } from 'react'
import { KeyboardContext } from "../../../hooks/keyboardContext";
import IKeyboardContextSignature from "../../../interfaces/IKeyboardContextSignature";
import StyledSelect from "../../styled/controlSelect";
import { getAllFilterTypes } from '../../../data/filterTypes';

function FilterTypeControl(){
    const localStorageKey = 'filterType';
    const filterTypeOptions = getAllFilterTypes();
    
    const { audioContextWrapper }: IKeyboardContextSignature = useContext(KeyboardContext);
    let initialFilterType = localStorage.getItem(localStorageKey) ?? filterTypeOptions[0];
    const [filterType, setFilterType] = useState(initialFilterType);

    useEffect((): void => {
        localStorage.setItem(localStorageKey, filterType);
        audioContextWrapper.setFilterType(filterType as BiquadFilterType);
    })

    return( 
        <div>
            <StyledSelect id="filter-select-id" className="filter-select"
                onChange={(e) => setFilterType(e.target.value)}
            >
                {filterTypeOptions.map(filter => <option value={filter} key={filter}>{filter}</option>)}
            </StyledSelect>
        </div>
    )
}

export default FilterTypeControl;