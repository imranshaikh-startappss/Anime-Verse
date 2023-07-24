import styled from "styled-components";
import "../../../Theme/Theme.scss";

export const Wrapper = styled.div``;

// ===Video Page===//
export const StyledVideoPage = styled.div`
  
    width: 100%;
    height: 100vh;
  
  video {
    width: 100%;
    height: 90%;
    object-fit: cover;
  }
  button:hover {
    cursor: pointer;
    box-shadow: 10px;
    transition: all 0.55s;
    transform: scale(1.1);
  }
  button {
    padding: 5px;
    border-radius: 6px;
    color: ${(props) => props.theme.primary};
    background-color: black;
    border: none;
    font-size: 17px;
    font-family: system-ui;
  }
`;
export const Content = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: ${(props) => props.theme.primary};
  font-weight: 600;
  font-family: Arial, Helvetica, sans-serif;
`;
// ===Image Page===//

export const ImageTage = styled.div`
  background: url(${(props) => props.imgsrc});
  width: 100%;
  height: 90vh;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  span {
    position: absolute;
    right: 145px;
    bottom: 63px;
    text-decoration: none !important;
    color: white;
  }
`;
export const MainDiv = styled.div`
  position: absolute;
  bottom: 76px;
  left: 74px;
  font-size: 21px;
  font-weight: 500;
  color: ${(props) => props.theme.primary};
`;
export const Button = styled.button`
  padding: 5px;
  border-radius: 6px;
  color: ${(props) => props.theme.primary};
  background-color: black;
  border: none;
  font-size: 17px;
  font-family: system-ui;
  :hover {
    cursor: pointer;
    box-shadow: 10px;
    transition: all 0.55s;
    transform: scale(1.1);
    background-color: ${(props) => props.theme.primary};
    color:black
`;
export const ShopNowlink = styled.p`
  position: absolute;
  right: 67px;
  bottom: 47px;
  text-decoration: none !important;
  color: white;

  :hover {
    display: inline-block;
    color: white;
    cursor: pointer;
  }

  :before {
    content: "";
    position: absolute;
    width: 100%;
    transform: scaleX(0);
    height: 2px;
    bottom: 0;
    left: 0;
    background-color: white;
    transform-origin: bottom right;
    transition: transform 0.35s ease-in;
  }
  :after {
    content: "";
    position: absolute;
    width: 100%;
    transform: scaleX(0);
    height: 2px;
    bottom: 0;
    left: 0;
    background-color: white;
    transform-origin: bottom left;
    transition: transform 0.35s ease-out;
  }

  :hover:after {
    transform: scaleX(1);
    transform-origin: bottom right;
  }
  :hover:before {
    transform: scaleX(1);
    transform-origin: bottom left;
  }
  span {
    text-decoration: none !important;
  }
`;

// ====Button Component====//
// ===Loader Section===
export const Loader = styled.div`
// display: flex;
// justify-content: center;
// align-items: center;
// min-height: 100vh;
// background:white;
// svg{
//   position: relative;
// width: 150px;
// height: 150px;
// animation: rotate 2s linear infinite;
// }
// // @keyframes rotate{
// //   0%{
// //     transform:rotate(0deg);
// //   }
// //   100%{
// //     transform:rotate(360deg);
// //   }

// }
//   circle {
//     width: 100%;
//     height: 100%;
//     fill: none;
//     stroke-width: 10;
//     stroke: black;
//     stroke-linecap:round;
//     transform:translate(5px,5px);
//     stroke-dasharray:440;
//     stroke-dashoffset:440;
//     animation:animate 4s linear infinite;
//   }
//   @keyframes animate{
//     0%
//     {
//     stroke-dashoffset: 440;
//     }
//     100%
//     {
//     stroke-dashoffset: 0;
//     }
//   }
`;
