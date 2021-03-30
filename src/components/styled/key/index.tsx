import styled from "styled-components"
import colors from "../../../data/colors"

interface StyledKeyProps {
    isPlaying : boolean,
}

const StyledKey = styled.li`
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
    height: 14rem;
    width: 8rem;
    background-color:${(props: StyledKeyProps) => props.isPlaying ? colors.brown : colors.white};
    color:${(props: StyledKeyProps) => props.isPlaying ? colors.offWhite : colors.brown};
    z-index: 1;
    border:1px ${colors.gray} solid;
    &:hover{
        background-color:${(props: StyledKeyProps) => props.isPlaying ? colors.brown : colors.offWhite};
    }
`

export const StyledFlat = styled(StyledKey)`
    height: 7rem;
    width: 4rem;
    background-color: ${(props: StyledKeyProps) => props.isPlaying ? colors.brown :colors.black};
    color:${(props: StyledKeyProps) => props.isPlaying ? colors.offWhite : colors.black};
    margin:0 -2em;
    z-index: 2;
    &:hover{
        background-color:${(props: StyledKeyProps) => props.isPlaying ? colors.brown: colors.hoverColor};
    }
`