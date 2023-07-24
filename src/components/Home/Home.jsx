import React from "react";
import VideoPage from "./VideoPage";
import ImagePage from "./ImagePage";
import Naruto from "../../asset/Narutovdo.mp4";
import { Wrapper } from "./styled/index.js";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";


import "../../Theme/Theme.scss";

const Home = () => {
  return (
    <Wrapper>
       
      <Carousel>
        <div>
        <VideoPage src={Naruto} />
        </div>
        <div>
          <ImagePage />
        </div>
      </Carousel>
    </Wrapper>
  );
};

export default Home;
