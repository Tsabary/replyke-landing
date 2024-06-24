import Image from "next/image";
import { LandingFaqSection } from "../components/landing/LandingFaq";
import { LandingSocialProofBand } from "../components/landing/social-proof/LandingSocialProofBand";
import { LandingSocialProofBandItem } from "../components/landing/social-proof/LandingSocialProofBandItem";
import { LandingPrimaryImageCtaSection } from "../components/landing/cta/LandingPrimaryCta";
import { Button } from "../components/shared/ui/button";
import { LandingSocialProof } from "../components/landing/social-proof/LandingSocialProof";
const faqItems = [
  {
    question: "What is Shipixen exactly?",
    answer:
      "Shipixen is an app that generates boilerplate code with your branding. You get the git repository & can modify the code as you want.",
  },
  {
    question: "Where can I deploy the generated code?",
    answer:
      "We make a deployment to Vercel for you as part of the generation process. However, you own the code, so you can technically deploy it on any host that support Next.js.",
  },
  {
    question: "What do I get if I pre-order?",
    answer:
      "With the pre-order, you get a 50% discount on the final price and a lifetime license for the generated code.",
  },
];

export default function Home() {
  return (
    <main>
      <div className="min-h-screen flex flex-col">
        <LandingSocialProofBand>
          <LandingSocialProofBandItem>
            100% encrypted and secure
          </LandingSocialProofBandItem>

          <LandingSocialProofBandItem>
            24/7 customer support
          </LandingSocialProofBandItem>

          <LandingSocialProofBandItem>
            99% customer satisfaction
          </LandingSocialProofBandItem>
        </LandingSocialProofBand>

        <LandingPrimaryImageCtaSection
          title="Landing page in minutes"
          description="Get 10x more done with Shadcn UI, React & Next.js, and say goodbye to repetitive tasks. You'll never go back."
          imageSrc="/lady-cab.jpg"
          imageAlt="Sample image"
          withBackground
          withBackgroundGlow
          backgroundGlowVariant="primary"
          className="flex-1"
        >
          <Button size="xl" asChild>
            <a href="#">Buy now</a>
          </Button>

          <Button size="xl" variant="outlinePrimary">
            <a href="#">Read more</a>
          </Button>

          <LandingSocialProof
            className="w-full mt-12"
            showRating
            numberOfUsers={500}
            avatarItems={[
              {
                imageSrc: "/static/images/people/1.webp",
                name: "John Doe",
              },
              {
                imageSrc: "/static/images/people/2.webp",
                name: "Jane Doe",
              },
              {
                imageSrc: "/static/images/people/3.webp",
                name: "Alice Doe",
              },
            ]}
          />
        </LandingPrimaryImageCtaSection>
      </div>
    </main>
  );
}
