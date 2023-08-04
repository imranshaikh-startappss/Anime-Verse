import styled from "styled-components";
import '../../../Theme/index.scss'


const Style = styled.div`

.main{
    background:#f5f7fa ;
    width: 100vw;
    height: 100vh;
    margin-top: 4rem;
}
.MuiContainer-root{
    display: flex;
    ${'' /* justify-content: center; */}
    align-items:center;
    ${'' /* background-color: red; */}
    height: 3rem;

    .container{
        display: flex;
        justify-content: center;
        align-items: center;
    
    a{
        text-decoration:none;
        color: black;
        &:hover{
            cursor: pointer;
            color: #999999;
        }
    }

    span{
        font-size: 1rem;
        ${'' /* color: blue; */}
    }
    .left{
        display: flex;
        height: 10rem;
    }
    
    }
    

    
}
`

export default Style;