import styled from "styled-components";
import "../../Theme/Theme.scss"

 const Wrapper = styled.div`
.content{
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: $Videotext;
    font-weight: 600;
    font-family: Arial, Helvetica, sans-serif;
};`
export default Wrapper;
