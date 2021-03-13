import React, { useState } from 'react';
import notes from "../data/notes"
import styled from "styled-components";
import Key from "./key";
import ControlPanel from "./controlPanel"
import { KeyboardProvider } from "../hooks/keyboardContext";
import colors from "../data/colors";

const StyledKeys = styled.ul`
    display: flex;
    margin:1rem 2rem 0 2rem;
    padding-inline-start: unset;
    border-top:1rem solid ${colors.brown};
    border-right:.5rem solid ${colors.brown};
    border-left:.5rem solid ${colors.brown};
    background-color:${colors.gray};
`

const StyledKeyboard = styled.div`
    padding-top:1rem;
    border-top:3rem solid ${colors.brown};
    border-radius:2rem 2rem 0 0 ;
    position:relative;
    background: linear-gradient(180deg, rgba(121,75,75,1) 0%, rgba(255,155,36,1) 98%, rgba(44,36,23,1) 100%);
`
function Keyboard() {
    const [isClicked, setIsClicked] = useState(false);
    return (
        <KeyboardProvider>
            <StyledKeyboard id="Keyboard">
                <ControlPanel/>
                <StyledKeys className="keyboard"
                    onMouseDown={() => setIsClicked(true)}
                    onMouseUp={() => setIsClicked(false)}
                    onMouseLeave={() => setIsClicked(false)}
                >
                    {Object.keys(notes).map(note => <Key
                        isMouseDown={isClicked}
                        note={ note }
                        key={ note }
                    />)}
                </StyledKeys>
            </StyledKeyboard>
        </KeyboardProvider>
    )
}

export default Keyboard;