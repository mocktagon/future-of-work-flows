
import React from 'react';
import { Navigation } from '@/components/landing/Navigation';
import { HeroSection } from '@/components/landing/HeroSection';
import { PainPointsSection } from '@/components/landing/PainPointsSection';
import { SolutionSection } from '@/components/landing/SolutionSection';
import { ProcessSection } from '@/components/landing/ProcessSection';
import { TestimonialsSection } from '@/components/landing/TestimonialsSection';
import { FinalCTA } from '@/components/landing/FinalCTA';

const Landing = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50/30">
      <Navigation />
      <HeroSection />
      <PainPointsSection />
      <SolutionSection />
      <ProcessSection />
      <TestimonialsSection />
      <FinalCTA />
    </div>
  );
};

export default Landing;
