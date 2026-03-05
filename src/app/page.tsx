import { Navbar } from "@/components/ui/navbar";
import { Hero } from "@/components/sections/hero";
import { SignalRadar } from "@/components/sections/signal-radar";
import { SocialProof } from "@/components/sections/social-proof";
import { HowItWorks } from "@/components/sections/how-it-works";
import { ProductIntelligence } from "@/components/sections/product-intelligence";
import { MicroAudit } from "@/components/sections/micro-audit";
import { CaseStudy } from "@/components/sections/case-study";
import { Results } from "@/components/sections/results";
import { PilotOffer } from "@/components/sections/pilot-offer";
import { FAQ } from "@/components/sections/faq";
import { Footer } from "@/components/ui/footer";

export default function Home() {
  return (
    <main className="min-h-screen relative font-sans tracking-tight">
      <Navbar />
      <Hero />
      <SignalRadar />
      <SocialProof />
      <HowItWorks />
      <ProductIntelligence />
      <MicroAudit />
      <CaseStudy />
      <Results />
      <PilotOffer />
      <FAQ />
      <Footer />
    </main>
  );
}
