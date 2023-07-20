import React from "react";
import VideoPage from "./VideoPage";
import Naruto from "../../asset/Narutovdo.mp4";
import { Wrapper, Content } from "./styled/index.js";
import ImagePage from "./ImagePage";

import "../../Theme/Theme.scss";

const Home = () => {
  const content = (
    <Content>
      <h1>The Anime Club</h1>
      <p>Limited Stocks Available</p>
      <button>Shop Now</button>
    </Content>
  );
  return (
    <Wrapper>
      <VideoPage src={Naruto} content={content} />
      <ImagePage />
    </Wrapper>
  );
};

export default Home;
