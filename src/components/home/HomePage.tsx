import React from 'react';
import { HeroSection } from './HeroSection';
import { AboutSection } from './AboutSection';
import { HomeProgramsPreview } from './HomeProgramsPreview';
import { HomeVolunteerAndPartner } from './HomeVolunteerAndPartner';
import { ImpactStrip } from './ImpactStrip';
import { HomeGetInvolvedCallout } from './HomeGetInvolvedCallout';
import { FounderSection } from '../common/FounderSection';
import { HomeStoriesPreview } from './HomeStoriesPreview';

export const HomePage: React.FC = () => {
  return (
    <div className="bg-white">
      {/* 1. Hero Section */}
      <HeroSection />

      {/* Verified Impact Quick Highlights */}
      <ImpactStrip />

      {/* 2. Who We Are & 8 Values Cards */}
      <AboutSection />

      {/* 3. Our 6 Programs */}
      <HomeProgramsPreview />

      {/* 4. Volunteer With Us & 5. Partner With Us */}
      <HomeVolunteerAndPartner />

      {/* 7. Get Involved Callout */}
      <HomeGetInvolvedCallout />

      {/* 8. About the Founder (Mr. Lubega Richard) */}
      <FounderSection />

      {/* 9. Stories & News */}
      <HomeStoriesPreview />
    </div>
  );
};
