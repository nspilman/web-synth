import styled from "styled-components";
import colors from "../../../data/colors";

export const StyledKeys = styled.ul`
  display: flex;
  margin: 1rem 2rem 0 2rem;
  padding-inline-start: unset;
  background-color: ${colors.gray};
`;

export const StyledKeyboard = styled.div`
  padding: 1rem 4rem;
  border-radius: 2rem;
  position: relative;
  background-color: ${colors.gray};
  box-shadow: 10px 10px 16px ${colors.black},
    -10px -10px 16px ${colors.lightShadow};
`;
