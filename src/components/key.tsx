import React, { useEffect, useState } from "react";
import { StyledFlat, StyledNatural } from "./styled/key";
import { keyNames } from "../data/notes";
import useVoice from "../hooks/useVoice";
import useKeyPress from "../hooks/useKeypress";

interface KeyProps {
  keyName: keyNames;
}

function Key({ keyName }: KeyProps) {
  const { playVoice, stopVoice } = useVoice(keyName);
  const isFlat: boolean = keyName.endsWith("b");
  const [isPlaying, setIsPlaying] = useState(false);
  const isKeyPressed = useKeyPress(keyName);

  useEffect(() => {
    if (isKeyPressed) {
      playVoice();
    } else {
      stopVoice();
    }
  }, [isKeyPressed]);

  const componentToRender = isFlat ? StyledFlat : StyledNatural;
  return React.createElement(
    componentToRender,
    {
      isPlaying,
      onMouseDown: () => playVoice(),
      onMouseLeave: () => stopVoice(),
      onMouseUp: () => stopVoice(),
    },
    keyName
  );
}

export default Key;
