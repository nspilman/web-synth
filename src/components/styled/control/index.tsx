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
