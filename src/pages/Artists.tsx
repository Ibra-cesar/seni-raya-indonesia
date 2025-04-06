
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ArtistCard from '@/components/ArtistCard';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { Search } from 'lucide-react';

const Artists = () => {
  // Sample artists data
  const artists = [
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
    },
    {
      id: '5',
      name: 'Rina Wijaya',
      specialty: 'Contemporary Photography',
      location: 'Bandung',
      avatar: 'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&w=200&h=200',
      workCount: 31
    },
    {
      id: '6',
      name: 'Ahmad Fauzi',
      specialty: 'Ceramic Art',
      location: 'Surabaya',
      avatar: 'https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?auto=format&fit=crop&w=200&h=200',
      workCount: 28
    },
    {
      id: '7',
      name: 'Putri Anindita',
      specialty: 'Mixed Media',
      location: 'Jakarta',
      avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&h=200',
      workCount: 22
    },
    {
      id: '8',
      name: 'Nyoman Darma',
      specialty: 'Stone Sculpture',
      location: 'Bali',
      avatar: 'https://images.unsplash.com/photo-1504257432389-52343af06ae3?auto=format&fit=crop&w=200&h=200',
      workCount: 45
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        {/* Hero Section */}
        <div className="bg-batik-gold/10 py-12 px-4">
          <div className="container mx-auto">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Our Artists</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mb-6">
              Discover talented artists from across Indonesia, each bringing their unique perspective and cultural heritage to their art.
            </p>
            <div className="relative max-w-xl">
              <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
              <Input 
                type="search" 
                placeholder="Search artists by name, specialty, or location..." 
                className="pl-10 pr-4 py-6"
              />
            </div>
          </div>
        </div>

        {/* Artists Grid */}
        <div className="container mx-auto px-4 py-12">
          <div className="flex justify-between items-center mb-8">
            <div>
              <h2 className="text-2xl font-bold">Featured Artists</h2>
              <p className="text-muted-foreground">Showcasing the best talent from our community</p>
            </div>
            
            <div className="flex items-center gap-2">
              <Label htmlFor="filter" className="text-sm whitespace-nowrap">Filter by:</Label>
              <Select defaultValue="all">
                <SelectTrigger id="filter" className="w-[180px]">
                  <SelectValue placeholder="All Specialties" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Specialties</SelectItem>
                  <SelectItem value="painting">Painting</SelectItem>
                  <SelectItem value="sculpture">Sculpture</SelectItem>
                  <SelectItem value="textile">Textile Art</SelectItem>
                  <SelectItem value="ceramics">Ceramics</SelectItem>
                  <SelectItem value="photography">Photography</SelectItem>
                  <SelectItem value="mixed-media">Mixed Media</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {artists.map(artist => (
              <ArtistCard key={artist.id} {...artist} />
            ))}
          </div>
          
          <div className="flex justify-center mt-10">
            <Button variant="outline">Load More Artists</Button>
          </div>
        </div>

        {/* Become an Artist CTA */}
        <section className="bg-batik-brown/10 py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Are You an Artist?</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
              Join our community of talented artists and showcase your work to art enthusiasts across Indonesia and the world.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button className="bg-batik-brown hover:bg-batik-brown/90 text-white">
                Join as an Artist
              </Button>
              <Button variant="outline">
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

export default Artists;
