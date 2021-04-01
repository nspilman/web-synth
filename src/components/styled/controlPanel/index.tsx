import styled from 'styled-components';
import colors from '../../../data/colors';

export const StyledControlPanel = styled.div`
    display:flex;
    align-items: center;
    justify-content:center;
    flex-direction:column;
`
export const StyledTabs = styled.div`
    display:flex;
`
interface StyledTabButtonProps {
    isSelected : boolean,
}

export const StyledTabButton = styled.button`
    padding:.5rem .75rem;
    background-color: ${(props: StyledTabButtonProps) => props.isSelected ? colors.offWhite : colors.brown};
    color: ${(props: StyledTabButtonProps) => props.isSelected ? colors.brown : colors.offWhite};
    border-radius:10px;
    :hover{
        background-color:${(props: StyledTabButtonProps) => !props.isSelected && colors.hoverColor};
    }
    `
    
export const StyledTab = styled.div`
    height:50px;
    padding-top:1rem;
`
export const StyledControlsLabel = styled.span`
    color:${colors.offWhite};
    padding:.5rem .75rem;
    font-weight:bold;
`