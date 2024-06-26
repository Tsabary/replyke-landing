import Faqs from "../components/complete/Faqs";
import Features from "../components/complete/Features";
import Hero from "../components/complete/Hero";
import SaveTime from "../components/complete/SaveTime";

export default function Home() {
  return (
    <main>
      <Hero />
      <SaveTime />
      <Features />
      <Faqs />
    </main>
  );
}
