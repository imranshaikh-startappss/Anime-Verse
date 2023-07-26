import React from "react";
import { ImageTage } from "./styled/index.js";
import Narutopic from "../../asset/Naruto1.jpg";

const ImagePage = (props) => {
  return (
    <ImageTage imgsrc={Narutopic}>
     {props.imageContent}
    </ImageTage>
  );
};

export default ImagePage;
