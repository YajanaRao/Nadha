import React from "react";

const Folder = ({ color }: { color: string }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <g data-name="Layer 2" fill={color}>
        <g data-name="folder">
          <rect width="24" height="24" opacity="0" />
          <path d="M19.5 20.5h-15A2.47 2.47 0 0 1 2 18.07V5.93A2.47 2.47 0 0 1 4.5 3.5h4.6a1 1 0 0 1 .77.37l2.6 3.18h7A2.47 2.47 0 0 1 22 9.48v8.59a2.47 2.47 0 0 1-2.5 2.43zM4 13.76v4.31a.46.46 0 0 0 .5.43h15a.46.46 0 0 0 .5-.43V9.48a.46.46 0 0 0-.5-.43H12a1 1 0 0 1-.77-.37L8.63 5.5H4.5a.46.46 0 0 0-.5.43z" />
        </g>
      </g>
    </svg>
  );
};

export default Folder;
