"use client"

import React from "react";
import { LandingSocialProofBand } from "../landing/social-proof/LandingSocialProofBand";
import { LandingSocialProofBandItem } from "../landing/social-proof/LandingSocialProofBandItem";
import { useMediaQuery } from "@uidotdev/usehooks";

function Banner() {
  const isDesktop = useMediaQuery("(min-width: 768px)");

  return (
    <LandingSocialProofBand>
      <LandingSocialProofBandItem>
        {isDesktop ? "100% free for all" : "100% Free"}
      </LandingSocialProofBandItem>

      <LandingSocialProofBandItem>
        {isDesktop ? "Highly customizable" : "Customizable"}
      </LandingSocialProofBandItem>

      <LandingSocialProofBandItem>
        {isDesktop ? "Lightweight and user-friendly" : "Lightweight"}
      </LandingSocialProofBandItem>
    </LandingSocialProofBand>
  );
}

export default Banner;
