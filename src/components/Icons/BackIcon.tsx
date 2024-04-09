import React from "react";

interface Icon {
  width: number;
  height: number;
}

export const BackIcon: React.FC<Icon> = ({ width, height }) => {
  return (
    <svg
      width={width}
      height={height}
      id="Layer_1"
      version="1.1"
      viewBox="0 0 512 512"
      xmlSpace="preserve"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <polygon points="352,128.4 319.7,96 160,256 160,256 160,256 319.7,416 352,383.6 224.7,256 " />
    </svg>
  );
};
