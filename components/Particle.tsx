import React from "react";
import MouseParticles from "react-mouse-particles";
export default function Particle() {
  return (
    //@ts-ignore
    <MouseParticles
      color={["#ffffff"]}
      g={2.3}
      num={1}
      radius={8}
      life={0.8}
      v={1.2}
      level={6}
    />
  );
}
