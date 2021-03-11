import styled from "styled-components";
import colors from "../../data/colors";

// Code mostly copied from https://codesandbox.io/s/input-range-custom-styled-components-x149y?from-embed=&file=/src/index.js:753-960

// excess height to improve interactive area / accessibility
const height = "1.5rem";
const thumbHeight = 20;
const trackHeight = ".5rem";

// colours
const upperColor = colors.black;
const lowerColor = colors.black;
const thumbColor = colors.white;
const thumbHoverColor = colors.brown;
const upperBackground = `linear-gradient(to bottom, ${upperColor}, ${upperColor}) 100% 50% / 100% ${trackHeight} no-repeat transparent`;
const lowerBackground = `linear-gradient(to bottom, ${lowerColor}, ${lowerColor}) 100% 50% / 100% ${trackHeight} no-repeat transparent`;

const makeLongShadow = (color : string, size: string) => {
    let i = 18;
    let shadow = `${i}px 0 0 ${size} ${color}`;
  
    for (; i < 706; i++) {
      shadow = `${shadow}, ${i}px 0 0 ${size} ${color}`;
    }
  
    return shadow;
  };

const ControlRange = styled.input`
overflow: hidden;
display: block;
appearance: none;
max-width: 700px;
// width: 100%;
background:none;
margin: 0;
height: ${height};
cursor: pointer;

&:focus {
  outline: none;
}

&::-webkit-slider-runnable-track {
  width: 100%;
  height: ${height};
  background: ${lowerBackground};
}

&::-webkit-slider-thumb {
  position: relative;
  appearance: none;
  height: ${thumbHeight}px;
  width: ${thumbHeight}px;
  background: ${thumbColor};
  border-radius: 100%;
  border: 0;
  top: 50%;
  transform: translateY(-50%);
  box-shadow: ${makeLongShadow(upperColor, "-10px")};
  transition: background-color 150ms;
}

&::-moz-range-track,
&::-moz-range-progress {
  width: 100%;
  height: ${height};
  background: ${upperBackground};
}

&::-moz-range-progress {
  background: ${lowerBackground};
}

&::-moz-range-thumb {
  appearance: none;
  margin: 0;
  height: ${thumbHeight};
  width: ${thumbHeight};
  background: ${thumbColor};
  border-radius: 100%;
  border: 0;
  transition: background-color 150ms;
}

&::-ms-track {
  width: 100%;
  height: ${height};
  border: 0;
  /* color needed to hide track marks */
  color: transparent;
  background: transparent;
}

&::-ms-fill-lower {
  background: ${lowerBackground};
}

&::-ms-fill-upper {
  background: ${upperBackground};
}

&::-ms-thumb {
  appearance: none;
  height: ${thumbHeight};
  width: ${thumbHeight};
  background: ${thumbColor};
  border-radius: 100%;
  border: 0;
  transition: background-color 150ms;
  /* IE Edge thinks it can support -webkit prefixes */
  top: 0;
  margin: 0;
  box-shadow: none;
}

&:hover,
&:focus {
  &::-webkit-slider-thumb {
    background-color: ${thumbHoverColor};
  }
  &::-moz-range-thumb {
    background-color: ${thumbHoverColor};
  }
  &::-ms-thumb {
    background-color: ${thumbHoverColor};
  }
}

`
export default ControlRange;