import styled from "styled-components";

export const StyleFooter = styled.div`

font-family:Imported_footer;

footer {
    padding: 5rem 0;
    background-color:#f5f5f5 ;

  }
  footer h5 {
    
    font-weight:600;
    font-size:14px;
    
  }
  p{
    font-weight:300;
    font-size:13px;
    color:rgb(77, 77, 77);
    line-height:18px;
  }
  

footer li {
    list-style: none;
    ${'' /* font-weight: lighter; */}
    cursor: pointer;
    margin: 0.5rem 0;
    
  }

  a{
    text-decoration: none;
    color:rgb(125, 124, 124);
    font-weight:400;
    font-size:14px;
   line-height:24px;

  }


  a:hover {
    display: inline-block;
    position: relative;
    color:black;
  }
  
  a:after {
    content: '';
    position: absolute;
    width: 100%;
    transform: scaleX(0);
    height: 2px;
    bottom: 0;
    left: 0;
    background-color:black;
    transform-origin: bottom right;
    transition: transform 0.25s ease-out;
  }
  
  a:hover:after {
    transform: scaleX(1);
    transform-origin: bottom left;
  }

  span{ 

    font-weight:400;
    font-size:14px;
    color:rgb(125, 124, 124);
  }
  ${'' /* h5{
    font-weight:bold;
    font-size:15px;
  } */}

  ${'' /* form{
   padding-bottom:15px;
   display:flex;
   align-item:center;
   justify-content:space-between;
   border-bottom: 1px solid rgb(56, 54, 54);
   margin-bottom:50px;

  }

  .mail{
    text-align:center;

  } */}


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
export const Ullist= styled.ul`
  padding-left:0 !important;
  padding-top:5px;
`

// export const li = styled.li`
// style:normal;
// font-weight:400;
// font-size:14px;
// color:#000000;
// line-height:24px;
// `