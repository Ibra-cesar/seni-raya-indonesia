
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ExhibitionCard from '@/components/ExhibitionCard';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CalendarIcon, Search } from 'lucide-react';

const Exhibitions = () => {
  // Sample exhibition data
  const exhibitions = [
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
    },
    {
      id: '4',
      title: 'Textile Arts of Indonesia',
      dateRange: 'July 8-22, 2025',
      location: 'Surabaya',
      image: 'https://images.unsplash.com/photo-1592313794229-c4c9e58cb1e9?auto=format&fit=crop&w=800&h=450',
      artists: ['Biranul Anas', 'Eko Nugroho']
    },
    {
      id: '5',
      title: 'Sacred Spaces: Temple Art and Architecture',
      dateRange: 'August 3-18, 2025',
      location: 'Bali',
      image: 'https://images.unsplash.com/photo-1536152470836-b943b246224c?auto=format&fit=crop&w=800&h=450',
      artists: ['I Nyoman Nuarta', 'Made Wianta']
    },
    {
      id: '6',
      title: 'Urban Perspectives: Jakarta Through Time',
      dateRange: 'September 10-25, 2025',
      location: 'Jakarta',
      image: 'https://images.unsplash.com/photo-1565967511849-76a60a516170?auto=format&fit=crop&w=800&h=450',
      artists: ['Jim Supangkat', 'Tisna Sanjaya']
    }
  ];

  const pastExhibitions = [
    {
      id: 'past-1',
      title: 'Crafts of the Islands: Traditional Artisans',
      dateRange: 'January 15-30, 2025',
      location: 'Makassar',
      image: 'https://images.unsplash.com/photo-1531913223931-b0d3198229ee?auto=format&fit=crop&w=800&h=450',
      artists: ['Anusapati', 'Nindityo Adipurnomo']
    },
    {
      id: 'past-2',
      title: 'Nature and Spirituality in Indonesian Art',
      dateRange: 'February 5-20, 2025',
      location: 'Yogyakarta',
      image: 'https://images.unsplash.com/photo-1596005554384-d293674c91d7?auto=format&fit=crop&w=800&h=450',
      artists: ['Nasirun', 'Putu Sutawijaya']
    },
    {
      id: 'past-3',
      title: 'Maritime Heritage: Coastal Communities and Their Arts',
      dateRange: 'March 10-25, 2025',
      location: 'Surabaya',
      image: 'https://images.unsplash.com/photo-1516690562900-8f81d4173d49?auto=format&fit=crop&w=800&h=450',
      artists: ['Christine Ay Tjoe', 'Faisal Habibi']
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        {/* Hero Banner */}
        <div className="bg-batik-brown/10 py-10 px-4">
          <div className="container mx-auto">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Art Exhibitions</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mb-6">
              Discover current and upcoming exhibitions showcasing the best of Indonesian art across the archipelago.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="relative flex-grow max-w-xl">
                <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                <Input 
                  type="search" 
                  placeholder="Search exhibitions..." 
                  className="pl-10 pr-4 py-6"
                />
              </div>
              <Button className="bg-batik-brown hover:bg-batik-brown/90 text-white">
                <CalendarIcon className="h-4 w-4 mr-2" />
                View Calendar
              </Button>
            </div>
          </div>
        </div>

        {/* Exhibition Tabs */}
        <div className="container mx-auto px-4 py-12">
          <Tabs defaultValue="upcoming" className="w-full">
            <TabsList className="mb-8">
              <TabsTrigger value="upcoming">Upcoming Exhibitions</TabsTrigger>
              <TabsTrigger value="current">Current Exhibitions</TabsTrigger>
              <TabsTrigger value="past">Past Exhibitions</TabsTrigger>
            </TabsList>
            
            <TabsContent value="upcoming" className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {exhibitions.map(exhibition => (
                  <ExhibitionCard key={exhibition.id} {...exhibition} />
                ))}
              </div>
              
              <div className="flex justify-center mt-10">
                <Button variant="outline">Load More</Button>
              </div>
            </TabsContent>
            
            <TabsContent value="current" className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {exhibitions.slice(0, 3).map(exhibition => (
                  <ExhibitionCard key={exhibition.id} {...exhibition} />
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="past" className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {pastExhibitions.map(exhibition => (
                  <ExhibitionCard key={exhibition.id} {...exhibition} />
                ))}
              </div>
              
              <div className="flex justify-center mt-10">
                <Button variant="outline">View Archive</Button>
              </div>
            </TabsContent>
          </Tabs>
        </div>

        {/* Call to Action */}
        <section className="bg-batik-red/10 py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Are You an Artist or Gallery?</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
              Showcase your exhibition on SeniRaya and reach art enthusiasts across Indonesia and beyond.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button className="bg-batik-brown hover:bg-batik-brown/90 text-white">
                Submit an Exhibition
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

export default Exhibitions;
