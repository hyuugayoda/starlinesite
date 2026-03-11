import React from 'react';
import Header from '../components/landing/Header';
import HeroSection from '../components/landing/HeroSection';
import AboutSection from '../components/landing/AboutSection';
import FeaturesSection from '../components/landing/FeaturesSection';
import TelephonySection from '../components/landing/TelephonySection';
import InternetSection from '../components/landing/InternetSection';
import WhatsAppSection from '../components/landing/WhatsAppSection';
import InfrastructureSection from '../components/landing/InfrastructureSection';
import ClientsSection from '../components/landing/ClientsSection';
import StatsSection from '../components/landing/StatsSection';
import CTASection from '../components/landing/CTASection';
import LocationMapSection from '../components/landing/LocationMapSection';
import Footer from '../components/landing/Footer';
import WhatsAppButton from '../components/landing/WhatsAppButton';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <HeroSection />
      <AboutSection />
      <FeaturesSection />
      <TelephonySection />
      <InternetSection />
      <WhatsAppSection />
      <InfrastructureSection />
      <ClientsSection />
      <StatsSection />
      <CTASection />
      <LocationMapSection />
      <Footer />
      <WhatsAppButton />
    </div>
  );
}