import styled from "styled-components";

const StyleFooter = styled.div`

footer {
    padding: 5rem 0;
    background-color:#f5f5f5 ;

  }
  footer h2 {
    color:rgb(38, 36, 36);
  }
  

footer li {
    list-style: none;
    font-weight: lighter;
    cursor: pointer;
    margin: 1rem 0;
  }

  a{
    text-decoration: none;
    color:rgb(56, 54, 54);
    font-size:13px;
    font-weight:400;
  }


  a:hover {
    display: inline-block;
    position: relative;
    color:rgb(56, 54, 54);
  }
  
  a:after {
    content: '';
    position: absolute;
    width: 100%;
    transform: scaleX(0);
    height: 2px;
    bottom: 0;
    left: 0;
    background-color:rgb(56, 54, 54);
    transform-origin: bottom right;
    transition: transform 0.25s ease-out;
  }
  
  a:hover:after {
    transform: scaleX(1);
    transform-origin: bottom left;
  }

  span{ 

    font-weight:400;
    font-size:15px;
    color:rgb(56, 54, 54);
  }

  form{
   padding-bottom:15px;
   display:flex;
   align-item:center;
   justify-content:space-between;
   border-bottom: 1px solid rgb(56, 54, 54);
   margin-bottom:50px;

  }

  .mail{
    text-align:center;

  }
${'' /* 
  input{
    width:100%;
    background:white;
    color:rgb(56, 54, 54);
    border:0;
    outline:none;
    height:40px;
  }

 
  
  i{
    font-size:18px;
    margin-right:10px;
    border:0;
    outline:none;

    background-color:white;
  }

  form button{
    background:transparent;
    border:0;
    outline:none;
    background:white;
  } */}

`

export const data = {
  StyleFooter,
}