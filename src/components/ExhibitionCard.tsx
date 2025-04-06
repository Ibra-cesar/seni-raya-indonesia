
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, MapPin } from 'lucide-react';

interface ExhibitionCardProps {
  id: string;
  title: string;
  dateRange: string;
  location: string;
  image: string;
  artists: string[];
}

const ExhibitionCard = ({ id, title, dateRange, location, image, artists }: ExhibitionCardProps) => {
  return (
    <Card className="overflow-hidden group hover:shadow-md transition-all">
      <div className="relative aspect-[16/9] overflow-hidden bg-secondary">
        <img 
          src={image} 
          alt={title} 
          className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4 text-white">
          <h3 className="font-bold text-lg mb-1">{title}</h3>
          <div className="flex flex-wrap gap-1 mb-2">
            {artists.map((artist, index) => (
              <span key={index} className="text-xs bg-white/20 px-2 py-0.5 rounded-full">
                {artist}
              </span>
            ))}
          </div>
        </div>
      </div>
      <CardContent className="p-4">
        <div className="flex justify-between items-start mb-4">
          <div className="flex items-start gap-2">
            <Calendar className="h-4 w-4 text-muted-foreground mt-0.5" />
            <span className="text-sm">{dateRange}</span>
          </div>
          <div className="flex items-start gap-2">
            <MapPin className="h-4 w-4 text-muted-foreground mt-0.5" />
            <span className="text-sm">{location}</span>
          </div>
        </div>
        <Button className="w-full">View Details</Button>
      </CardContent>
    </Card>
  );
};

export default ExhibitionCard;
