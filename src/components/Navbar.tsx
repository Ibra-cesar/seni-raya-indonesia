
import React, { useState } from 'react';
import { Menu, X, Search, ShoppingBag, User } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-md border-b border-border">
      <div className="container flex justify-between items-center h-16 px-4 md:px-6">
        <div className="flex items-center">
          <Link to="/" className="flex items-center mr-6">
            <span className="text-2xl font-bold text-batik-brown">Seni<span className="text-batik-red">Raya</span></span>
          </Link>
          <nav className="hidden md:flex gap-6">
            <Link to="/" className="text-sm font-medium hover:text-batik-red transition-colors">
              Home
            </Link>
            <Link to="/marketplace" className="text-sm font-medium hover:text-batik-red transition-colors">
              Marketplace
            </Link>
            <Link to="/exhibitions" className="text-sm font-medium hover:text-batik-red transition-colors">
              Exhibitions
            </Link>
            <Link to="/artists" className="text-sm font-medium hover:text-batik-red transition-colors">
              Artists
            </Link>
          </nav>
        </div>
        <div className="hidden md:flex items-center gap-4">
          <div className="relative">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input 
              type="search" 
              placeholder="Search..." 
              className="w-[200px] pl-8 rounded-full bg-secondary"
            />
          </div>
          <Button variant="ghost" size="icon" className="rounded-full">
            <ShoppingBag className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon" className="rounded-full">
            <User className="h-5 w-5" />
          </Button>
          <Button>Sign In</Button>
        </div>
        <Button 
          variant="ghost" 
          size="icon" 
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </Button>
      </div>
      {isMenuOpen && (
        <div className="md:hidden fixed inset-0 top-16 z-50 flex flex-col p-4 bg-background">
          <div className="relative mb-4">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input 
              type="search" 
              placeholder="Search..." 
              className="w-full pl-8 rounded-full bg-secondary"
            />
          </div>
          <div className="flex flex-col gap-4">
            <Link to="/" className="px-4 py-2 text-sm font-medium hover:bg-secondary rounded-md">
              Home
            </Link>
            <Link to="/marketplace" className="px-4 py-2 text-sm font-medium hover:bg-secondary rounded-md">
              Marketplace
            </Link>
            <Link to="/exhibitions" className="px-4 py-2 text-sm font-medium hover:bg-secondary rounded-md">
              Exhibitions
            </Link>
            <Link to="/artists" className="px-4 py-2 text-sm font-medium hover:bg-secondary rounded-md">
              Artists
            </Link>
          </div>
          <div className="flex flex-row mt-4 gap-2">
            <Button variant="outline" className="flex-1">Sign In</Button>
            <Button className="flex-1">Sign Up</Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
