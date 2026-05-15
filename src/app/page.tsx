import { Navbar } from "@/components/ui/navbar";
import { Hero } from "@/components/sections/hero";
import { SocialProof } from "@/components/sections/social-proof";
import { HowItWorks } from "@/components/sections/how-it-works";
import { Results } from "@/components/sections/results";
import { FAQ } from "@/components/sections/faq";
import { Footer } from "@/components/ui/footer";

export default function Home() {
  return (
    <main className="min-h-screen relative font-sans tracking-tight">
      <Navbar />
      <Hero />
      <SocialProof />
      <HowItWorks />
      <Results />
      <FAQ />
      <Footer />
    </main>
  );
}
