import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import ProblemSolution from "@/components/ProblemSolution";
import ProductOverview from "@/components/ProductOverview";
import TechnologyStack from "@/components/TechnologyStack";
import CoreFeatures from "@/components/CoreFeatures";
import BusinessModel from "@/components/BusinessModel";
import ValuePropositions from "@/components/ValuePropositions";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0d0d0d] text-white relative">
      <Navigation />
      <Hero />
      <ProblemSolution />
      <ProductOverview />
      <TechnologyStack />
      <CoreFeatures />
      <BusinessModel />
      <ValuePropositions />
      <Footer />
    </main>
  );
}
