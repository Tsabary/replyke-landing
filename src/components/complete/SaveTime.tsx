import React from "react";
import { LandingBandSection } from "../landing/LandingBand";
import { Clock4Icon, HourglassIcon } from "lucide-react";

function SaveTime() {
  return (
    <LandingBandSection
      title={"20-30h"}
      description={"Saved on development by using Replyke"}
      variant="secondary"
      supportingComponent={
        <>
          <Clock4Icon className="w-12 h-12" />
          <HourglassIcon className="w-12 h-12" />
        </>
      }
    />
  );
}

export default SaveTime;
