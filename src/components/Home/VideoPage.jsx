import React from "react";
import { StyledVideoPage } from "./styled/index.js";

const VideoPage = ({ src,Content }) => {
  return (
    <StyledVideoPage>
        <video src={src} autoPlay loop muted />
       {Content}
    </StyledVideoPage>
  );
};

export default VideoPage;
