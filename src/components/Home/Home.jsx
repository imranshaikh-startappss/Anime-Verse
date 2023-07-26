import React from "react";
import VideoPage from "./VideoPage";
import ImagePage from "./ImagePage";
import Naruto from "../../asset/Narutovdo.mp4";
import {
  Wrapper,
  Content,
  MainDiv,
  Button,
  ShopNowlink,
} from "./styled/index.js";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "../../Theme/Theme.scss";
import { Typography } from "@mui/material";

const Home = () => {
  const imagePageContent = (
    <>
      <MainDiv className=" mb-5">
        <Typography variant="h2" component="h2">
          {" "}
          New In{" "}
        </Typography>

        <p>Looking for Something New</p>
        <Button>Shop Now</Button>
      </MainDiv>
      <span>Essentials by Anime |</span>
      <ShopNowlink href="https://www.google.com/"> Shop Now</ShopNowlink>
    </>
  );
  const content = (
    <Content>
      <h1>The Anime Club</h1>
      <p>Limited Stocks Available</p>
      <button>Shop Now</button>
    </Content>
  );
  return (
    <Wrapper>
      <Carousel>
        <div>
          <VideoPage src={Naruto} Content={content} />
        </div>
        <div>
          <ImagePage imageContent={imagePageContent} />
        </div>
      </Carousel>
    </Wrapper>
  );
};

export default Home;
