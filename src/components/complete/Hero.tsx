import CommentSectionSheet from "../CommentSectionSheet";
import { LandingPrimaryTextCtaSection } from "../landing/cta/LandingPrimaryCta";
import { Button } from "../shared/ui/button";
import Banner from "./Banner";

function Hero() {
  return (
    <div className="min-h-screen flex flex-col">
      <Banner />

      <LandingPrimaryTextCtaSection
        title="Integrate Comments in Minutes"
        description="Enhance your React projects with Replyke. Effortlessly add a customizable comment section and provide a better user experience."
      >
        <div className="flex gap-2">
          <Button size="xl" asChild>
            <a href="htpps://docs.replyke.com">Get Started</a>
          </Button>

          <CommentSectionSheet>
            <Button size="xl" variant="outlinePrimary">
              See it in Action
            </Button>
          </CommentSectionSheet>
        </div>
      </LandingPrimaryTextCtaSection>
    </div>
  );
}

export default Hero;
