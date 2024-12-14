import React from 'react';

interface VideoProps {
  videoSource: string;
}

const VideoComponent: React.FC<VideoProps> = ({ videoSource }) => {
  return (
    <video autoPlay loop muted width="auto" height="100%">
    <source src={videoSource} type="video/mp4" />
    Your browser does not support the video tag.
    </video>
  );
};

export default VideoComponent;