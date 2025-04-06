
import React from 'react';
import { Instagram, Facebook, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-batik-brown text-white">
      <div className="container px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">SeniRaya</h3>
            <p className="text-batik-cream/80 mb-4">
              Connecting Indonesian artists with art lovers worldwide, celebrating our rich cultural heritage.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-batik-cream hover:text-white transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-batik-cream hover:text-white transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-batik-cream hover:text-white transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold text-batik-gold mb-4">Explore</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-batik-cream/80 hover:text-white transition-colors">Marketplace</a></li>
              <li><a href="#" className="text-batik-cream/80 hover:text-white transition-colors">Exhibitions</a></li>
              <li><a href="#" className="text-batik-cream/80 hover:text-white transition-colors">Artists</a></li>
              <li><a href="#" className="text-batik-cream/80 hover:text-white transition-colors">Art Styles</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-batik-gold mb-4">For Artists</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-batik-cream/80 hover:text-white transition-colors">Sell Your Art</a></li>
              <li><a href="#" className="text-batik-cream/80 hover:text-white transition-colors">Promote Exhibition</a></li>
              <li><a href="#" className="text-batik-cream/80 hover:text-white transition-colors">Artist Resources</a></li>
              <li><a href="#" className="text-batik-cream/80 hover:text-white transition-colors">Success Stories</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-batik-gold mb-4">Help</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-batik-cream/80 hover:text-white transition-colors">FAQ</a></li>
              <li><a href="#" className="text-batik-cream/80 hover:text-white transition-colors">Shipping</a></li>
              <li><a href="#" className="text-batik-cream/80 hover:text-white transition-colors">Returns</a></li>
              <li><a href="#" className="text-batik-cream/80 hover:text-white transition-colors">Contact Us</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-batik-cream/20 mt-12 pt-8 text-center text-sm text-batik-cream/60">
          <p>© 2025 SeniRaya. All rights reserved. SeniRaya is dedicated to the promotion of Indonesian art and culture.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
