import React, { useState } from "react";
import videoInfoData from "../../data/videoInfoData";

const VideoSection = () => {
  const [currentVideoId, setCurrentVideoId] = useState("001");
  const [videoData, setVideoData] = useState(videoInfoData);

  const ListVideos = videoData.filter((item) => item.id !== currentVideoId);
  const CurrentPlaying = videoData.filter((item) => item.id === currentVideoId);
  function handleVideoSelection(id) {
    setCurrentVideoId(id);
  }

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
            src={`${CurrentPlaying[0].videoSrc}`}
            controls
            poster={`${CurrentPlaying[0].imgSrc}`}
          >
            Connection Error Please Refresh The Page
          </video>
          <h1>{CurrentPlaying[0].title}</h1>
          <p>{CurrentPlaying[0].description}</p>
          <p className="location">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
              <path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z" />
            </svg>
            {CurrentPlaying[0].location}
          </p>
        </div>
        <div className="list-vid">
          {ListVideos.map((vid) => (
            <div className="list-inner" key={vid.name}>
              <img
                src={`${vid.imgSrc}`}
                onClick={() => handleVideoSelection(vid.id)}
              />
              <div className="vid-info">
                <h3>{vid.name}</h3>
                <p>{vid.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default VideoSection;
