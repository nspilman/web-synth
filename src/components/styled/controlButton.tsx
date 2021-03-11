import styled from 'styled-components'
import colors from "../../data/colors"

const ControlButton = styled.div`
background-color: ${colors.offWhite};
margin:.1rem;
display:flex;
padding:.2rem .5rem;
align-items:center;
border-radius:.3rem;
justify-content:center;
&:hover{
    background-color:${colors.brown};
    color:white;
    cursor:pointer;
}
&::selection{
    background: transparent;
}
`

export default ControlButton;