
import React from 'react';
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Heart, ShoppingCart } from 'lucide-react';

interface ProductCardProps {
  id: string;
  title: string;
  artist: string;
  price: number;
  image: string;
}

const ProductCard = ({ id, title, artist, price, image }: ProductCardProps) => {
  return (
    <Card className="overflow-hidden transition-all hover:shadow-md">
      <div className="relative aspect-square overflow-hidden bg-secondary">
        <img 
          src={image} 
          alt={title} 
          className="object-cover w-full h-full transition-transform hover:scale-105"
        />
        <Button 
          variant="ghost" 
          size="icon" 
          className="absolute top-2 right-2 bg-white/80 hover:bg-white rounded-full"
        >
          <Heart className="h-4 w-4 text-batik-red" />
        </Button>
      </div>
      <CardContent className="p-4">
        <h3 className="font-medium text-base mb-1 line-clamp-1">{title}</h3>
        <p className="text-sm text-muted-foreground mb-2">by {artist}</p>
        <p className="font-semibold">Rp {price.toLocaleString('id-ID')}</p>
      </CardContent>
      <CardFooter className="p-4 pt-0">
        <Button className="w-full gap-2">
          <ShoppingCart className="h-4 w-4" />
          Add to Cart
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
