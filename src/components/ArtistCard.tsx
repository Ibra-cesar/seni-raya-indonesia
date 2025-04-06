
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";

interface ArtistCardProps {
  id: string;
  name: string;
  specialty: string;
  location: string;
  avatar: string;
  workCount: number;
}

const ArtistCard = ({ id, name, specialty, location, avatar, workCount }: ArtistCardProps) => {
  return (
    <Card className="overflow-hidden hover:shadow-md transition-all">
      <CardContent className="p-6 flex flex-col items-center text-center">
        <Avatar className="h-24 w-24 mb-4 border-2 border-batik-cream">
          <AvatarImage src={avatar} alt={name} />
          <AvatarFallback className="bg-batik-brown text-white text-xl">
            {name.split(' ').map(n => n[0]).join('')}
          </AvatarFallback>
        </Avatar>
        <h3 className="font-bold text-lg mb-1">{name}</h3>
        <p className="text-sm text-muted-foreground mb-2">{specialty}</p>
        <p className="text-xs text-muted-foreground mb-4 flex items-center gap-1">
          <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
            <circle cx="12" cy="10" r="3"></circle>
          </svg>
          {location}
        </p>
        <div className="text-xs text-muted-foreground mb-4">
          {workCount} Artworks
        </div>
        <Button variant="outline" className="w-full">View Profile</Button>
      </CardContent>
    </Card>
  );
};

export default ArtistCard;
