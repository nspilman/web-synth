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
    text-transform: uppercase;
    font-family: 'Righteous', cursive;
    z-index: 1;
    border:1px ${colors.gray} solid;
    &:focus{
        background-color:${(props: StyledKeyProps) => props.isPlaying ? colors.purple : colors.purple};
    }
    &:first-child {
        border-radius:10px 0 0 10px;
    }
    &:last-child {
        border-radius:0 10px 10px 0;
    }
    &:nth-child(n)::before {
        margin-bottom: 22rem;
        color: ${(props: StyledKeyProps) => props.isPlaying ? colors.purple : colors.grayLight};
    }
    &:nth-child(1)::before {
        content:"C";
        margin-right:1rem;
    };
    &:nth-child(3)::before {
        content:"D";
        margin-left: 1rem;
    };
    &:nth-child(5)::before {
        content:"E";
        margin-left: 2.5rem;
    };
    &:nth-child(6)::before {
        content:"F";
        margin-right: 1rem;
    };
    &:nth-child(8)::before {
        content:"G";
        margin-left: 1rem;
    };
    &:nth-child(10)::before {
        content:"A";
        margin-left: 1rem;
    };
    &:nth-child(12)::before {
        content:"B";
        margin-left: 2.5rem;
    };
`

export const StyledFlat = styled(StyledKey)`
    height: 12rem;
    width: 4rem;
    background-color: ${(props: StyledKeyProps) => props.isPlaying ? colors.purple :colors.gray};
    color:transparent;
    text-transform: uppercase;
    font-family: 'Righteous', cursive;
    margin:0 -2em;
    z-index: 2;
    border-radius: 0 0 1rem 1rem;
    &:focus{
        background-color:${(props: StyledKeyProps) => props.isPlaying ? colors.purple: colors.purple};
    }
    &:nth-child(n)::before {
        margin-bottom: 13.8rem;
        margin-left: 1.5rem;
        color: ${(props: StyledKeyProps) => props.isPlaying ? colors.purple : colors.grayLight};
    }
    &:nth-child(2)::before {
        content:"C♭";
    };
    &:nth-child(4)::before {
        content:"E♭";
    };
    &:nth-child(7)::before {
        content:"G♭";
    };
    &:nth-child(9)::before {
        content:"A♭";
    };
    &:nth-child(11)::before {
        content:"B♭";
    };
`