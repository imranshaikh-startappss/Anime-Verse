import styled from "styled-components";

const LoginStyle = styled.div`
 .container {
    text-align:center;
    


 .icon{
    height:${({ theme }) => theme.Colors.height}}

.mouse:hover{
    color:${({ theme }) => theme.Colors.fade_black};
     cursor: pointer;
     } 
 .textInput{
    ${'' /* width: 80%; */}
    
 }    
 .loginGap{
    width:auto;
 }
 
  .forgotPassword{
        text-decoration: underline ;     }
 }
 .forgotPassword:hover{
   
    cursor: pointer;
 }
.Register {
    background-color:${({ theme }) => theme.Colors.black} ;
    text-transform: none;
        transition:transform 500ms;
    
    &:hover{
        background-color: ${({ theme }) => theme.Colors.black};
        transform:scale(1.1);
    }
}
   .facebook{
    display: flex;
    justify-content: space-between;
    text-transform: none;
    background-color: ${({ theme }) => theme.Colors.btnFacebookbgcolorblue};
    &:hover{
        background-color: ${({ theme }) => theme.Colors.btnFacebookbodercolor};
   }

}
   .google{
    display: flex;
    justify-content: space-between;
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
