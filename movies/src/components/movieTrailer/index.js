import React from 'react';
import YouTube from 'react-youtube';

const extractVideoId = (url) => {
  const match = url.match(/[?&]v=([^?&]+)/);
  return match && match[1];
};

const MovieTrailer = ({ videoUrl }) => {
  const videoId = extractVideoId(videoUrl);

  const opts = {
    width: '427%', // Set width to 100% of the container
    height: '850px',
    
    playerVars: {
      autoplay: 1, 
    },
  };

  return <YouTube videoId={videoId} opts={opts} containerClassName="youtube-container" />;
};

export default MovieTrailer;
