import React from "react";
import StyledVideoPage from './StyledVideoPage'

const VideoPage = ({src,content,loadingbtn}) => {
    
  return (
    <StyledVideoPage >
      <div className="home">
        <video src={src} autoPlay loop muted /> 
        {content}
        {loadingbtn}
      </div>
    </StyledVideoPage>
  );
};

export default VideoPage;
