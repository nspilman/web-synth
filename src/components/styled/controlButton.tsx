import styled from 'styled-components'

const StyledControlButton = styled.div`
background-color:rgb(230,230,230);
margin:.1rem;
display:flex;
padding:.2rem .5rem;
align-items:center;
border-radius:.3rem;
justify-content:center;
&:hover{
    background-color:rgb(90,20,20);
    color:white;
    cursor:pointer;
}
&::selection{
    background: transparent;
}
`

export default StyledControlButton;