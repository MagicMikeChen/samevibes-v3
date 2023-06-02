import React from "react";
interface VideoModalProps {
  classNameProps?: string;
}
const VideoModal = (props: VideoModalProps) => {
  const { classNameProps } = props;
  return (
    <div
      className={`flex aspect-[4/3] w-screen items-center justify-center md:aspect-auto md:h-[85vh] md:w-[90vw] ${classNameProps}`}
    >
      <iframe
        width="100%"
        height="100%"
        src="https://www.youtube.com/embed/LBvow7FS2V4"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default VideoModal;
