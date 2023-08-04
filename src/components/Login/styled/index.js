import styled from "styled-components";

const LoginStyle = styled.div`



font-family:Imported_footer;

 .container {
    text-align:center;
    margin-top: ${({ theme }) => theme.Colors.loginHeight}};
    


 .icon{
    height:${({ theme }) => theme.Colors.height}}

.mouse{color:black;
    text-decoration: none; 

&:hover{
    color:${({ theme }) => theme.Colors.fade_black};
         cursor:${({ theme }) => theme.Colors.cursorPointer} ;
     } }
     
 .loginGap{
    width:auto;
 }
 
  .forgotPassword{
        text-decoration: underline ;    
        color:${({ theme }) => theme.Colors.black};
         }
 }
 .forgotPassword:hover{
   color:${({ theme }) => theme.Colors.black};
  cursor:${({ theme }) => theme.Colors.cursorPointer};
 }
.Register {
    background-color:${({ theme }) => theme.Colors.black} ;
    text-transform: none;
        transition:transform 500ms;
       

    
    &:hover{
        background-color: ${({ theme }) => theme.Colors.black};
        transform:scale(1.05);
    }

}
#outlined-basic {
    height:40px;
}

.RegisterForm{
    background-color:${({ theme }) => theme.Colors.btnColor} ;
    color:${({ theme }) => theme.Colors.black};
    text-transform: none;
        transition:transform 500ms;
       width: ${({ theme }) => theme.Colors.registerWidth};
       border: 0.063rem solid;

    
    &:hover{
        background-color: ${({ theme }) => theme.Colors.black};
        color: ${({ theme }) => theme.Colors.btnColor};
        transform:scale(1.05);
    }

}

.res{
   margin-left:30%;
}
.paratag{
    text-align: justify
}


.password-Para{
    white-space: nowrap;
        overflow: hidden;
        text-overflow: clip;
        margin-right: ${({ theme }) => theme.Colors.marginRight} ;

} 
.btn-cancel{
    background-color:${({ theme }) => theme.Colors.btnColor};
    color:${({ theme }) => theme.Colors.black};
    &:hover{
       background-color:${({ theme }) => theme.Colors.btnColor};
       transform:scale(1.05);
    }
    
}
.form-error{
    font-size: ${({ theme }) => theme.Colors.fontSizeInput} ;
    font-weight: ${({ theme }) => theme.Colors.fontWightInput};
    color:${({ theme }) => theme.Colors.fontColorInput};
    height: ${({ theme }) => theme.Colors.fontHeightInput} ;
    position: relative !important; 
    bottom: ${({ theme }) => theme.Colors.bottomInput} !important;
   }
   .facebook{
    text-transform: none;
    background-color: ${({ theme }) => theme.Colors.btnFacebookbgcolorblue};
    &:hover{
        background-color: ${({ theme }) => theme.Colors.btnFacebookbodercolor};
   }

}
   .google{
    
    text-transform: none;
    background-color: ${({ theme }) => theme.Colors.btnGoolebgcolorred};
    &:hover{
        background-color: ${({ theme }) => theme.Colors.btnGoolebgbodercolor};
   }
   
   }

`
export const data = {
    LoginStyle,
}
