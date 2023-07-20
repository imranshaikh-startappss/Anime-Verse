import React from "react";
import { ImageTage,MainDiv,Button,ShopNowlink } from "./styled/index.js";
// import Narutopic from '../../asset/narutopic.jpg'
import Narutopic from "../../asset/Naruto1.jpg";
import { Typography  } from "@mui/material";

const ImagePage = () => {
  return (
    <ImageTage imgsrc={Narutopic}>
      <MainDiv>
      <Typography variant="h2" component="h2"> New In </Typography>

        <p>Looking for Something New</p>
        <Button>Shop Now</Button>
      </MainDiv>
      <span >Essentials by Anime |</span><ShopNowlink  href="https://www.google.com/"> Shop Now</ShopNowlink>
    </ImageTage>
  );
};

export default ImagePage;
