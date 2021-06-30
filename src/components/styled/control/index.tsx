import styled from "styled-components";
import colors from "../../../data/colors";

export const StyledLabel = styled.span`
  color: ${colors.blue};
  padding-bottom: 4px;
`;

export const StyledControl = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
`;

export const StyledKnob = styled.div`
  margin: auto;
`;

export const StyledDialControl = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const StyledButton = styled.button`
  padding:.75rem 0rem;
  width:130px;
  margin: 0 .25rem;
  background-color: ${colors.gray};
  color: ${colors.blue};
  border-radius:10px;
  border: 1px solid ${colors.lightShadow};
  text-transform: uppercase;
  :focus{
      outline: -webkit-focus-ring-color auto 0px;
      // border: 1px solid ${colors.blue};
  }
  :active{
      box-shadow:  inset 5px 5px 8px ${colors.black},
          inset -5px -5px 8px ${colors.lightShadow};
      // border: 1px solid ${colors.blue};
  }
`;
