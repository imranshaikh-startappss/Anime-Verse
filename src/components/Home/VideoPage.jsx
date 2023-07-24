import React from "react";
import { StyledVideoPage } from "./styled/index.js";
import { Content } from "./styled/index.js";

const VideoPage = ({ src }) => {
  return (
    <StyledVideoPage>
        <video src={src} autoPlay loop muted />
        <Content>
          <h1>The Anime Club</h1>
          <p>Limited Stocks Available</p>
          <button>Shop Now</button>
        </Content>
      
    </StyledVideoPage>
  );
};

export default VideoPage;
