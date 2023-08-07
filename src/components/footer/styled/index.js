import styled from "styled-components";

export const StyleFooter = styled.div`
  font-family: Imported_;

  .socialIcons {
    cursor: pointer;
    display: flex;
    gap: 0.375rem;
  }

  .last-section {
    ${"" /* display: flex; */}
    flex-wrap: wrap;
    justify-content: space-between;
    padding: 0px 35px 0 35px;
  }
  ${
    "" /* {
     @media only screen and (max-width: 700px) {
    .last-section {
      flex-direction: column;
    } 
  }
  } */
  }

  footer {
    min-width: 100vw;
    position: absolute;
    bottom: 0;
    padding-top: 0.625 rem;
    max-height: 100vh;
    overflow-x: auto;

    background-color: #f5f5f5;
  }
  footer h5 {
    font-weight: 500;
    font-size: 0.875rem;
    font-family: Imported_;
  }
  p {
    font-weight: 300;
    font-size: 0.813rem;
    color: rgb(125, 124, 124);
    line-height: 0.938 rem;
    font-family: Imported_;
  }

  footer li {
    list-style: none;
    ${"" /* font-weight: lighter; */}
    cursor: pointer;
    margin: 0.5rem 0;
  }

  .MuiPaper-root {
    background-color: #f5f5f5 !important;
  }

  .beGeoA {
    padding-top: 0.438rem !important;
  }
  .MuiGrid-spacing-xs-3 {
    margin: 0rem !important;
  }

  .block {
    border-right: 1px solid rgb(166 166 166 / 46%);
    ${"" /* padding-left: 3 rem; */}
  }

  a {
    text-decoration: none;
    color: rgb(125, 124, 124);
    font-weight: 400;
    font-size: 0.875rem;
    line-height: 2 rem;
  }

  a:hover {
    display: inline-block;
    position: relative;
    color: black;
  }

  a:after {
    content: "";
    position: absolute;
    width: 100%;
    transform: scaleX(0);
    height: 0.13rem;
    bottom: 0;
    left: 0;
    background-color: black;
    transform-origin: bottom right;
    transition: transform 0.25s ease-out;
  }

  a:hover:after {
    transform: scaleX(1);
    transform-origin: bottom left;
  }
`;

export const Ullist = styled.ul`
  padding-left: 0 !important;
  padding-top: 0.3 rem;
`;
