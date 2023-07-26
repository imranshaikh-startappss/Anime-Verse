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
    box-shadow: 0.6rem;
    transition: all 0.55s;
    transform: scale(1.1);
  }
  button {
    padding: 0.3rem;
    border-radius: 0.375rem;
    color: ${(props) => props.theme.primary};
    background-color: black;
    border: none;
    font-size: 1.06rem;
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
    right: 9.063rem;
    bottom: 3.938rem;
    text-decoration: none !important;
    color: white;
  }
`;
export const MainDiv = styled.div`
  position: absolute;
  bottom: 4.75rem;
  left: 4.625rem;
  font-size:  1.313rem;
  font-weight: 500;
  color: ${(props) => props.theme.primary};
`;
export const Button = styled.button`
  padding: 0.313rem;
  border-radius: 0.375rem;
  color: ${(props) => props.theme.primary};
  background-color: black;
  border: none;
  font-size: 1.063rem;
  font-family: system-ui;
  :hover {
    cursor: pointer;
    box-shadow: 0.625rem;
    transition: all 0.55s;
    transform: scale(1.1);
    background-color: ${(props) => props.theme.primary};
    color:black
`;
export const ShopNowlink = styled.p`
  position: absolute;
  right: 4.188rem;
  bottom: 2.938rem;
  text-decoration: none !important;
  color: ${(props) => props.theme.primary};

  :hover {
    display: inline-block;
    color: ${(props) => props.theme.primary};
    cursor: pointer;
  }

  :before {
    content: "";
    position: absolute;
    width: 100%;
    transform: scaleX(0);
    height: 0.125rem;
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
    height: 0.125rem;
    bottom: 0;
    left: 0;
    background-color: ${(props) => props.theme.primary};
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

// ====Carousel====/

