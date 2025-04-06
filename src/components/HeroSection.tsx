
import React from 'react';
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 z-0 bg-gradient-to-r from-batik-brown/20 to-batik-red/20 batik-pattern"></div>
      <div className="container relative z-10 px-4 py-16 md:py-24 lg:py-32">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-4">
              Discover <span className="text-batik-red">Indonesian</span> Art & Culture
            </h1>
            <p className="text-lg mb-8 text-muted-foreground max-w-md">
              Connect with artists, buy unique creations, and explore art exhibitions celebrating Indonesia's rich cultural heritage.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-batik-red hover:bg-batik-red/90">
                Explore Marketplace
              </Button>
              <Button size="lg" variant="outline">
                Join Community
              </Button>
            </div>
          </div>
          <div className="relative rounded-lg overflow-hidden bg-gradient-to-br from-batik-gold/20 to-batik-red/20 aspect-[4/3] shadow-xl">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center p-8">
                <div className="inline-block p-3 mb-4 rounded-full bg-white/90 text-batik-red">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
                    <path d="M12 2a10 10 0 1 0 10 10H12V2Z"></path>
                    <path d="M12 2a10 10 0 0 1 10 10"></path>
                    <path d="M12 12v10"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Featured Exhibition</h3>
                <p className="text-sm mb-4">Contemporary Batik: Tradition Meets Modern Art</p>
                <p className="text-xs text-muted-foreground">April 10-25, 2025 • Jakarta</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
