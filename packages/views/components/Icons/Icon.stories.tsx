import React from "react";
import { Heart, HeartFilled } from "./Heart";

export const OutlinedHeart = () => <Heart value={false} />;

export const FilledHeart = () => <Heart value={true} />;

export const FilledHeartWithColor = () => <HeartFilled color="red" />;

export const BigIcon = () => <Heart value={true} size={32} />;

export default {
  title: "Icons",
};
