
import React from 'react';
import ProductCard from './ProductCard';
import { Button } from "@/components/ui/button";

const FeaturedArtworks = () => {
  const featuredProducts = [
    {
      id: '1',
      title: 'Contemporary Wayang Painting',
      artist: 'Dewi Sartika',
      price: 2500000,
      image: 'https://images.unsplash.com/photo-1582561424760-0321336c70e9?auto=format&fit=crop&w=800&h=800'
    },
    {
      id: '2',
      title: 'Balinese Temple Sculpture',
      artist: 'Made Wirawan',
      price: 3750000,
      image: 'https://images.unsplash.com/photo-1555685812-4b8f286284e6?auto=format&fit=crop&w=800&h=800'
    },
    {
      id: '3',
      title: 'Batik Wall Art - Jogja Pattern',
      artist: 'Sri Handayani',
      price: 1850000,
      image: 'https://images.unsplash.com/photo-1596464716127-f2a82984de30?auto=format&fit=crop&w=800&h=800'
    },
    {
      id: '4',
      title: 'Javanese Wooden Mask',
      artist: 'Budi Santoso',
      price: 1200000,
      image: 'https://images.unsplash.com/photo-1515405295579-ba7b45403062?auto=format&fit=crop&w=800&h=800'
    }
  ];

  return (
    <section className="py-12 md:py-16 bg-white">
      <div className="container px-4">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl md:text-3xl font-bold">Featured Artworks</h2>
          <Button variant="outline">View All</Button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredProducts.map(product => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedArtworks;
