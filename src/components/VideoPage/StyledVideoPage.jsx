import styled from "styled-components";

 const StyledVideoPage = styled.div`
.home{
    width: 100%;
    height: 100vh;
}
video{
    width: 100%;
    height: 90%;
    object-fit: cover;
}
button:hover{
    cursor: pointer;
    box-shadow: 10px;
    transition: all 0.55s;
    transform: scale(1.1);
}
button{
    padding: 5px;
    border-radius: 6px;
    color: ${props => props.theme.primary};
    background-color: black;
    border: none;
    font-size: 17px;
    font-family: system-ui;
    }
`
export default StyledVideoPage;