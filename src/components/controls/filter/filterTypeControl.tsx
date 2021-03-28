
import React, { Dispatch } from 'react'
import StyledSelect from "../../styled/controlSelect";
import { getAllFilterTypes } from '../../../data/filterTypes';
import { useSelector, useDispatch } from 'react-redux';
import { AudioControllerAction, filterActionTypes } from '../../../store/actions/audioControllerAction';
import { AppState } from '../../../store/reducers';

function FilterTypeControl(){
    const filterTypeOptions = getAllFilterTypes();

    const { audioContext, filter } = useSelector((state: AppState) => state);
    const { type } = filter;
    const dispatch = useDispatch<Dispatch<AudioControllerAction>>();

    const setFilterType = (filterType : BiquadFilterType) => {
            const payload: AudioControllerAction = {
                type: filterActionTypes.SET_TYPE,
                payload: filterType,
                setAudioController: () => audioContext.setFilterType(filterType),
            }
            dispatch(payload)
        }

    return( 
        <div>
            <StyledSelect id="filter-select-id" className="filter-select"
                onChange={(e) => setFilterType(e.target.value as BiquadFilterType)}
                value={type}
            >
                {filterTypeOptions.map(filter => <option value={filter} key={filter}>{filter}</option>)}
            </StyledSelect>
        </div>
    )
}

export default FilterTypeControl;