import React, { useState } from 'react';
import notes from "../data/notes"
import AudioContextWrapper from "../classes/audioContextWrapper";
import styled from "styled-components";
import Key from "./key";
import OctaveControl from './octaveControl';
import WaveControl from './waveControl';

import { KeyboardProvider } from "../hooks/keyboardContext";

const Board = styled.div`
    display: flex;
`
function Keyboard() {
    const [isClicked, setIsClicked] = useState(false);
    return (
        <KeyboardProvider>
            <div id="Keyboard">
                <Board className="keyboard"
                    onMouseDown={() => setIsClicked(true)}
                    onMouseUp={() => setIsClicked(false)}
                    onMouseLeave={() => setIsClicked(false)}
                >
                    {Object.keys(notes).map(note => <Key
                        isMouseDown={isClicked}
                        note={ note }
                        key={ note }
                    />)}
                </Board>
                <OctaveControl />
                <WaveControl/>
            </div>
        </KeyboardProvider>
    )
}

export default Keyboard;