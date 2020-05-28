import React, { useState } from "react";
import { TouchableOpacity } from "react-native";

export const HeartOutline = ({ color = "black" }: { color?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
    <g data-name="Layer 2">
      <g data-name="heart" fill={color}>
        <rect width="24" height="24" opacity="0" />
        <path d="M12 21a1 1 0 0 1-.71-.29l-7.77-7.78a5.26 5.26 0 0 1 0-7.4 5.24 5.24 0 0 1 7.4 0L12 6.61l1.08-1.08a5.24 5.24 0 0 1 7.4 0 5.26 5.26 0 0 1 0 7.4l-7.77 7.78A1 1 0 0 1 12 21zM7.22 6a3.2 3.2 0 0 0-2.28.94 3.24 3.24 0 0 0 0 4.57L12 18.58l7.06-7.07a3.24 3.24 0 0 0 0-4.57 3.32 3.32 0 0 0-4.56 0l-1.79 1.8a1 1 0 0 1-1.42 0L9.5 6.94A3.2 3.2 0 0 0 7.22 6z" />
      </g>
    </g>
  </svg>
);

export const HeartFilled = ({ color = "black" }: { color?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
    <g data-name="Layer 2">
      <g data-name="heart" fill={color}>
        <rect width="24" height="24" opacity="0" />
        <path d="M12 21a1 1 0 0 1-.71-.29l-7.77-7.78a5.26 5.26 0 0 1 0-7.4 5.24 5.24 0 0 1 7.4 0L12 6.61l1.08-1.08a5.24 5.24 0 0 1 7.4 0 5.26 5.26 0 0 1 0 7.4l-7.77 7.78A1 1 0 0 1 12 21z" />
      </g>
    </g>
  </svg>
);

export const Heart = ({
  value,
  size = 16,
}: {
  value: boolean;
  size?: number;
}) => {
  const [filled, setFilled] = useState(value);

  if (filled) {
    return (
      <TouchableOpacity
        onPress={() => setFilled(false)}
        style={{ height: size, width: size }}
      >
        <HeartFilled color="red" />
      </TouchableOpacity>
    );
  }
  return (
    <TouchableOpacity
      onPress={() => setFilled(true)}
      style={{ height: size, width: size }}
    >
      <HeartOutline />
    </TouchableOpacity>
  );
};
