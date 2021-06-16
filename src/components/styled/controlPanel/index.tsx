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
    padding:.75rem 0rem;
    width:130px;
    margin: 0 .25rem;
    background-color: ${(props: StyledTabButtonProps) => props.isSelected ? colors.gray : colors.gray};
    color: ${(props: StyledTabButtonProps) => props.isSelected ? colors.blue : colors.grayLight};
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
`
    
export const StyledTab = styled.div`
    margin: 1.5rem 0 1rem 0;
    width:560px;
    padding:1.5rem 0;
    background:black;
    border-radius:10px;
    box-shadow:  inset 5px 5px 8px ${colors.black},
             inset -5px -5px 8px ${colors.lightShadow};
`
export const StyledBrandLabel = styled.span`
    font-size:1.8rem;
    color:${colors.blue};
    padding:1.5rem 0;
    text-transform: uppercase;
    font-family: 'Righteous', cursive;
`