import React, { useState } from "react";
import videoInfoData from "../../data/videoInfoData";

const VideoSection = () => {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const [videoData, setVideoData] = useState(videoInfoData);

  return (
    <div className="Video-Section">
      <div className="video-desc">
        <h1>Videos To Makeup Your Mind</h1>
        <p>
          Here are some videos from the travels we had with our clients enjoy
          the video and book your next travel in your favorite place in ethiopia
        </p>
      </div>

      <div className="video-part">
        <div className="playing-vid">
          <video
            width="750px"
            height="520px"
            // src={`${videoData[currentVideoIndex].videoSrc}`}
            src="omovalley.mp4"
            controls
            // poster={`${videoData[currentVideoIndex].imgSrc}`}
          >
            Connection Error Please Refresh The Page
          </video>

          <h1>{videoData[currentVideoIndex].title}</h1>
          <p>{videoData[currentVideoIndex].description}</p>
        </div>
      </div>
    </div>
  );
};

export default VideoSection;
