import React, { useContext } from 'react';
import { getAllFilterTypes } from '../data/filterTypes';

import { KeyboardContext, UpdateKeyboardContext } from "../hooks/keyboardContext";


function FilterControl(){
    const setState = useContext(UpdateKeyboardContext);
    const state = useContext(KeyboardContext);
    
    const setFilter = (e : React.ChangeEvent<HTMLSelectElement>) =>{
        setState({...state,
            //wave: e.target.value
            // filterType: e.target.value
        })
    }

    const filterTypeOptions = getAllFilterTypes();

    return (
        <div id="FilterControl">
            <select id="filter-select-id" className="filter-select"
                onChange={(e) => setFilter(e)}
            >
                {filterTypeOptions.map(filter => <option value={filter} key={filter}>{filter}</option>)}
            </select>
        </div>
    )
}

export default FilterControl