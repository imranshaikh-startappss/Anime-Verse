import styled from "styled-components"
import "../../../Theme/Theme.scss"


export const Div = styled.div`

border: 2px solid ${({theme})=> theme.Colors.primary};
${'' /* background-color: ${props=>props.theme.Colors.primary}; */}



`;
