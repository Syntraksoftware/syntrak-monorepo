import Navigation from "@/components/Navigation";
import SyntrakHero from "@/components/SyntrakHero";
import SyntrakFeatures from "@/components/SyntrakFeatures";
import HowItWorks from "@/components/HowItWorks";
import Undetectable from "@/components/Undetectable";
import Transcription from "@/components/Transcription";
import FAQ from "@/components/FAQ";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0d0d0d] text-white relative" style={{ overflow: 'visible' }}>
      <Navigation />
      <SyntrakHero />
      <SyntrakFeatures />
      <HowItWorks />
      <Undetectable />
      <Transcription />
      <FAQ />
      <CTASection />
      <Footer />
    </main>
  );
}
