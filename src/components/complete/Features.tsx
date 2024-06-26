import React from "react";
import { LandingFeatureList } from "../landing/feature/LandingFeatureList";
import { Paintbrush, ShieldCheck, Sparkles } from "lucide-react";

function Features() {
  return (
    <LandingFeatureList
      title={"Seamless Comment Integration with Replyke"}
      description={
        "Enhance your React projects effortlessly with Replyke, offering a fully customizable and easy-to-integrate comment section."
      }
      featureItems={[
        {
          title: "Easy Integration",
          description:
            "Add a robust comment section to your React project in minutes by following our simple documentation.",
          icon: <Sparkles />,
        },
        {
          title: "Customizable Design",
          description:
            "Tailor the look and feel of your comment section using the Replyke Studio, providing a seamless match to your project's design.",
          icon: <Paintbrush />,
        },
        {
          title: "Self-Hosted Data",
          description:
            "Maintain full control over your data by hosting it on your own server, ensuring privacy and security for your users.",
          icon: <ShieldCheck />,
        },
      ]}
      withBackgroundGlow
    />
  );
}

export default Features;
