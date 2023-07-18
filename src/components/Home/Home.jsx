import React from "react";
import VideoPage from "../VideoPage/VideoPage";
import Naruto from "../../asset/Narutovdo.mp4";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import Wrapper from "./StyledHome";
import ImagePage from "../VideoPage/ImagePage";
import styled from "styled-components";
import "../../Theme/Theme.scss"

const Content = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: var(Videotext);
  font-weight: 600;
  font-family: Arial, Helvetica, sans-serif;
`

const Home = () => {
  const content = (
    <Content>
      <h1>The Anime Club</h1>
      <p>Limited Stocks Available</p>
      <button>Shop Now</button>
    </Content>
  );
  const loadingbtn = (
    <div className="loadingbtn">
      <FiberManualRecordIcon
        fontSize="5px"
        sx={{
          position: "absolute",
          top: "186px",
          right: 0,
          paddingright: "12px",
          width: "33px",
        }}
      />
      <FiberManualRecordIcon
        fontSize="5px"
        sx={{
          position: "absolute",
          top: "216px",
          right: 0,
          paddingright: "12px",
          width: "33px",
        }}
      />
    </div>
  );

  return (
    <Wrapper>
      <VideoPage src={Naruto} content={content} loadingbtn={loadingbtn} />
      <ImagePage/>

    </Wrapper>
  );
};

export default Home;
