
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ProductCard from '@/components/ProductCard';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { ChevronDown, Filter, Search } from 'lucide-react';

const Marketplace = () => {
  // Sample product data
  const products = [
    {
      id: '1',
      title: 'Javanese Batik Pattern',
      artist: 'Dewi Sartika',
      price: 1500000,
      image: 'https://images.unsplash.com/photo-1582555172866-f73bb12a2ab3?auto=format&fit=crop&w=800&h=500',
      isFeatured: true
    },
    {
      id: '2',
      title: 'Balinese Temple Painting',
      artist: 'Made Wirawan',
      price: 3200000,
      image: 'https://images.unsplash.com/photo-1540508664702-8e2ece422odc?auto=format&fit=crop&w=800&h=500',
      isFeatured: false
    },
    {
      id: '3',
      title: 'Jakarta Skyline',
      artist: 'Budi Santoso',
      price: 2800000,
      image: 'https://images.unsplash.com/photo-1570304816841-906a2389bf7b?auto=format&fit=crop&w=800&h=500',
      isFeatured: true
    },
    {
      id: '4',
      title: 'Ramayana Wood Carving',
      artist: 'Sri Handayani',
      price: 4500000,
      image: 'https://images.unsplash.com/photo-1597766347913-787ed9cf6e7a?auto=format&fit=crop&w=800&h=500',
      isFeatured: false
    },
    {
      id: '5',
      title: 'Borobudur at Dawn',
      artist: 'Dewi Sartika',
      price: 3800000,
      image: 'https://images.unsplash.com/photo-1579064580128-1117ccf4ba42?auto=format&fit=crop&w=800&h=500',
      isFeatured: true
    },
    {
      id: '6',
      title: 'Wayang Kulit Shadow',
      artist: 'Budi Santoso',
      price: 2200000,
      image: 'https://images.unsplash.com/photo-1601483222811-52e4d152d618?auto=format&fit=crop&w=800&h=500',
      isFeatured: false
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        {/* Hero Banner */}
        <div className="bg-batik-red/10 py-10 px-4">
          <div className="container mx-auto">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Discover Indonesian Art</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mb-6">
              Browse our curated collection of authentic Indonesian artwork from talented artists across the archipelago.
            </p>
            <div className="relative max-w-xl">
              <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
              <Input 
                type="search" 
                placeholder="Search for artwork, artists, styles..." 
                className="pl-10 pr-4 py-6"
              />
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row gap-8">
            {/* Filters Sidebar */}
            <div className="w-full md:w-1/4 space-y-6">
              <div className="md:hidden">
                <Button variant="outline" size="sm" className="w-full flex items-center justify-between">
                  <span className="flex items-center">
                    <Filter className="h-4 w-4 mr-2" />
                    Filters
                  </span>
                  <ChevronDown className="h-4 w-4" />
                </Button>
              </div>
              
              <div className="hidden md:block space-y-6">
                <div>
                  <h3 className="font-semibold mb-3">Art Categories</h3>
                  <div className="space-y-2">
                    {['Painting', 'Sculpture', 'Textile', 'Batik', 'Ceramics', 'Wood Carving'].map((category) => (
                      <div key={category} className="flex items-center">
                        <Checkbox id={`category-${category}`} />
                        <Label htmlFor={`category-${category}`} className="ml-2 text-sm">{category}</Label>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h3 className="font-semibold mb-3">Price Range</h3>
                  <Slider 
                    defaultValue={[0, 75]} 
                    max={100} 
                    step={1}
                    className="my-6" 
                  />
                  <div className="flex justify-between text-sm text-muted-foreground">
                    <span>Rp 500,000</span>
                    <span>Rp 10,000,000+</span>
                  </div>
                </div>
                
                <div>
                  <h3 className="font-semibold mb-3">Region</h3>
                  <div className="space-y-2">
                    {['Java', 'Bali', 'Sumatra', 'Sulawesi', 'Kalimantan', 'Papua'].map((region) => (
                      <div key={region} className="flex items-center">
                        <Checkbox id={`region-${region}`} />
                        <Label htmlFor={`region-${region}`} className="ml-2 text-sm">{region}</Label>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            
            {/* Products Grid */}
            <div className="w-full md:w-3/4">
              <div className="flex justify-between items-center mb-6">
                <p className="text-sm text-muted-foreground">{products.length} results</p>
                <div className="flex items-center gap-2">
                  <Label htmlFor="sort" className="text-sm whitespace-nowrap">Sort by:</Label>
                  <Select defaultValue="featured">
                    <SelectTrigger id="sort" className="w-[180px]">
                      <SelectValue placeholder="Sort by" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="featured">Featured</SelectItem>
                      <SelectItem value="newest">Newest</SelectItem>
                      <SelectItem value="price-low">Price: Low to High</SelectItem>
                      <SelectItem value="price-high">Price: High to Low</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {products.map((product) => (
                  <ProductCard 
                    key={product.id}
                    id={product.id}
                    title={product.title}
                    artist={product.artist}
                    price={product.price}
                    image={product.image}
                    isFeatured={product.isFeatured}
                  />
                ))}
              </div>
              
              <div className="flex justify-center mt-10">
                <Button variant="outline">Load More</Button>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Marketplace;
