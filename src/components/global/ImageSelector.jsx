import React, { useRef } from "react";

export default function ImageSelector({ cameraImgSvg }) {
  const fileInputRef = useRef(null);

  const handleClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      console.log("Selected file:", file);
      // you can handle preview or upload here
    }
  };

  return (
    <div
      className="w-full 2xl:max-w-[502px] md:max-w-[300px] flex items-center justify-center bg-fadedWhite rounded-[34px] py-[60px] cursor-pointer"
      onClick={handleClick}
    >
      {cameraImgSvg}

      {/* Hidden input */}
      <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        className="hidden"
        onChange={handleFileChange}
      />
    </div>
  );
}
