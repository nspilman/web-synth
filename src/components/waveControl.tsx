import React from 'react';
import styled from "styled-components";
import waveforms from "../data/waveforms";

interface WaveControlProps {
    setWave: (wave: string) => void
}

function onWaveSelectClick(e: any, setWaveFunc: (wave: string) => void) {
    var selectedWave = e.target.value;
    if (selectedWave != null) {
        setWaveFunc(selectedWave);
    }
}

function WaveControl({setWave}: WaveControlProps){
    return (
        <div id="WaveControl">
            <select id="wave-select-id" className="wave-select"
                onChange={(e) => onWaveSelectClick(e, setWave)}
            >
                <option value={waveforms.SINE}>{waveforms.SINE}</option>
                <option value={waveforms.SAWTOOTH}>{waveforms.SAWTOOTH}</option>
                <option value={waveforms.SQUARE}>{waveforms.SQUARE}</option>
                <option value={waveforms.TRIANGLE}>{waveforms.TRIANGLE}</option>
            </select>
        </div>
    )
}

export default WaveControl