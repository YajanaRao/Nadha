import React from "react";
import { Heart, HeartFilled } from "../components/Icons/Heart";
import { AlertTriangle } from "../components/Icons/Alert";
import { Container } from "../components/Container/Container";

export const OutlinedHeart = () => <Heart value={false} />;

export const AlertIcon = () => (
  <Container style={{ width: 60, height: 60 }}>
    <AlertTriangle />
  </Container>
);

export const FilledHeartWithColor = () => (
  <Container style={{ width: 60, height: 60 }}>
    <HeartFilled color="red" />
  </Container>
);

export const BigIcon = () => <Heart value={true} size={32} />;

export default {
  title: "Icons",
};
