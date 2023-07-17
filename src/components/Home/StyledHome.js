import styled from "styled-components"
import "../../Theme/_ThemeVariable.scss"

const Div = styled.div`

border: 2px solid red;
background-color: ${({bgcolor})=> bgcolor};



`;

export default Div;