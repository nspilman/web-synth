import styled from "styled-components"
import colors from "../../../data/colors"

interface StyledKeyProps {
    isPlaying : boolean,
}

const StyledKey = styled.li`
    cursor:pointer;
    display:flex;
    position:relative;
    float:left;
    align-items:center;
    justify-content:center;
    &::selection{
        background: transparent;
    }
`

export const StyledNatural = styled(StyledKey)`
    height: 20rem;
    width: 6rem;
    background-color:${(props: StyledKeyProps) => props.isPlaying ? colors.purple : colors.blue};
    color:transparent;
    // color:${colors.blue};
    z-index: 1;
    border:1px ${colors.gray} solid;
    &:hover{
        background-color:${(props: StyledKeyProps) => props.isPlaying ? colors.purple : colors.purple};
    }
    &:first-child {
        border-radius:10px 0 0 10px;
    }
    &:last-child {
        border-radius:0 10px 10px 0;
    }
`

export const StyledFlat = styled(StyledKey)`
    height: 12rem;
    width: 4rem;
    background-color: ${(props: StyledKeyProps) => props.isPlaying ? colors.purple :colors.gray};
    color:transparent;
    // color:${colors.gray};
    margin:0 -2em;
    z-index: 2;
    border-radius: 0 0 1rem 1rem;
    &:hover{
        background-color:${(props: StyledKeyProps) => props.isPlaying ? colors.purple: colors.purple};
    }
`