import React, { useContext } from 'react';
import { getAllWaveTypes } from "../data/waveforms";

import { KeyboardContext, UpdateKeyboardContext } from "../hooks/keyboardContext";


function WaveControl(){
    const setState = useContext(UpdateKeyboardContext);
    const state = useContext(KeyboardContext);
    
    const setWave = (e : React.ChangeEvent<HTMLSelectElement>) =>{
        setState({...state,
            wave: e.target.value})
    }

    const waveTypeOptions = getAllWaveTypes();

    return (
        <div id="WaveControl">
            <select id="wave-select-id" className="wave-select"
                onChange={(e) => setWave(e)}
            >
                {waveTypeOptions.map(waveform => <option value={waveform} key={waveform}>{waveform}</option>)}
            </select>
        </div>
    )
}

export default WaveControl