
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import FeaturedArtworks from '@/components/FeaturedArtworks';
import Footer from '@/components/Footer';
import ExhibitionCard from '@/components/ExhibitionCard';
import ArtistCard from '@/components/ArtistCard';
import { Button } from "@/components/ui/button";
import { useAuth } from '@/contexts/AuthContext';

const Index = () => {
  const navigate = useNavigate();
  const { user } = useAuth();
  
  const upcomingExhibitions = [
    {
      id: '1',
      title: 'Contemporary Batik: Tradition Meets Modern Art',
      dateRange: 'April 10-25, 2025',
      location: 'Jakarta',
      image: 'https://images.unsplash.com/photo-1582555172866-f73bb12a2ab3?auto=format&fit=crop&w=800&h=450',
      artists: ['Iwan Tirta', 'Nia Fliam', 'Agus Ismoyo']
    },
    {
      id: '2',
      title: 'Archipelago Perspectives: Indonesian Landscapes',
      dateRange: 'May 5-20, 2025',
      location: 'Bali',
      image: 'https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?auto=format&fit=crop&w=800&h=450',
      artists: ['Nyoman Nuarta', 'Laksmi Shitaresmi']
    },
    {
      id: '3',
      title: 'Wayang Reimagined: Shadow Puppets in Modern Context',
      dateRange: 'June 15-30, 2025',
      location: 'Yogyakarta',
      image: 'https://images.unsplash.com/photo-1601483222811-52e4d152d618?auto=format&fit=crop&w=800&h=450',
      artists: ['Heri Dono', 'Entang Wiharso']
    }
  ];

  const featuredArtists = [
    {
      id: '1',
      name: 'Dewi Sartika',
      specialty: 'Contemporary Painting',
      location: 'Jakarta',
      avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=200&h=200',
      workCount: 24
    },
    {
      id: '2',
      name: 'Made Wirawan',
      specialty: 'Traditional Sculpture',
      location: 'Bali',
      avatar: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&fit=crop&w=200&h=200',
      workCount: 37
    },
    {
      id: '3',
      name: 'Sri Handayani',
      specialty: 'Batik Textile Art',
      location: 'Yogyakarta',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&h=200',
      workCount: 42
    },
    {
      id: '4',
      name: 'Budi Santoso',
      specialty: 'Wooden Crafts',
      location: 'Solo',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&h=200',
      workCount: 19
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <HeroSection />
        <FeaturedArtworks />
        
        {/* Upcoming Exhibitions Section */}
        <section className="py-12 md:py-16 bg-secondary/50">
          <div className="container px-4">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl md:text-3xl font-bold">Upcoming Exhibitions</h2>
              <Button variant="outline">View All</Button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {upcomingExhibitions.map(exhibition => (
                <ExhibitionCard key={exhibition.id} {...exhibition} />
              ))}
            </div>
          </div>
        </section>
        
        {/* Featured Artists Section */}
        <section className="py-12 md:py-16 bg-white">
          <div className="container px-4">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl md:text-3xl font-bold">Featured Artists</h2>
              <Button variant="outline">View All</Button>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {featuredArtists.map(artist => (
                <ArtistCard key={artist.id} {...artist} />
              ))}
            </div>
          </div>
        </section>
        
        {/* Call to Action Section */}
        <section className="py-16 md:py-20 bg-batik-red/10">
          <div className="container px-4 text-center">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">Join the Indonesian Art Community</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
              Connect with artists, collectors, and art enthusiasts. Share your work, discover new talents, and be part of our growing community.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button 
                size="lg" 
                className="bg-batik-brown hover:bg-batik-brown/90"
                onClick={() => navigate('/auth')}
              >
                {user ? 'View Your Profile' : 'Create Account'}
              </Button>
              <Button size="lg" variant="outline">
                Learn More
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
