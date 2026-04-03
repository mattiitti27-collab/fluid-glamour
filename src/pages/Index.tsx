import { Suspense, lazy } from "react";
import ScrollProgress from "@/components/ScrollProgress";
import AmbientBackground from "@/components/AmbientBackground";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import MetodoSection from "@/components/MetodoSection";
import ChiSonoSection from "@/components/ChiSonoSection";
import RepartiSection from "@/components/RepartiSection";
import HiringSection from "@/components/HiringSection";
import ContactSection from "@/components/ContactSection";
import ReviewsSection from "@/components/ReviewsSection";
import FooterSection from "@/components/FooterSection";
import FloatingButton from "@/components/FloatingButton";
import CookieBanner from "@/components/CookieBanner";

const ThreeBackground = lazy(() => import("@/components/ThreeBackground"));

const Index = () => {
  return (
    <div className="relative min-h-screen scroll-smooth">
      <ScrollProgress />

      <AmbientBackground />

      <Suspense fallback={null}>
        <ThreeBackground />
      </Suspense>

      <Navbar />
      <HeroSection />
      <MetodoSection />
      <ChiSonoSection />
      <RepartiSection />
      <HiringSection />
      <ContactSection />
      <ReviewsSection />
      <FooterSection />
      <FloatingButton />
      <CookieBanner />
    </div>
  );
};

export default Index;
