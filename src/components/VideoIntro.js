import React from 'react';

const VideoComponent = () => (
  <video
    className="w-screen h-screen object-cover fixed top-0 left-0 z-[-2]"
    autoPlay
    playsInline
    muted
    loop
  >
    <source src="/videos/Sustainability_Report_Montage_1.mp4" type="video/mp4" />
    Your browser does not support the video tag.
  </video>
);

export default VideoComponent;
