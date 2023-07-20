import styled from "styled-components";

const LoginStyle = styled.div`

font-family:Imported_footer;

 .container {
    text-align:center;
    


 .icon{
    height:${({ theme }) => theme.Colors.height}}

.mouse:hover{
    color:${({ theme }) => theme.Colors.fade_black};
     cursor: pointer;
     } 
     
 .loginGap{
    width:auto;
 }
 
  .forgotPassword{
        text-decoration: underline      }
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
        transform:scale(1.05);
    }

}
.form-error{
    display:flex;
    font-size: small;
    font-weight: 600;
    color:#bf1c1c;
    height:14px;
    position: relative !important;
    bottom: 5px !important;
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
