
import React from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { artworks } from "@/data/artworks";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";

const ArtworkDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { toast } = useToast();
  
  const artwork = artworks.find((artwork) => artwork.id === id);

  if (!artwork) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Artwork not found</h2>
          <Link to="/gallery">
            <Button variant="outline">Return to Gallery</Button>
          </Link>
        </div>
      </div>
    );
  }

  const handleBuyNow = () => {
    toast({
      title: "Added to Cart",
      description: `${artwork.title} has been added to your cart.`,
    });
    // In a real application, this would add the item to a cart
    // For now, we'll just show a toast notification
  };

  return (
    <div className="min-h-screen bg-white py-12 animate-fade-in">
      <div className="container mx-auto px-4">
        <Button 
          variant="ghost" 
          onClick={() => navigate("/gallery")} 
          className="mb-8 text-art-graphite hover:text-art-charcoal"
        >
          &larr; Back to Gallery
        </Button>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Artwork Image */}
          <div>
            <div className="border border-gray-200 rounded-lg overflow-hidden">
              <img
                src={artwork.imageUrl}
                alt={artwork.title}
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
          
          {/* Artwork Details */}
          <div>
            <h1 className="text-3xl font-bold mb-4 text-art-charcoal">
              {artwork.title}
            </h1>
            
            <p className="text-art-graphite mb-6 text-lg">
              {artwork.description}
            </p>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-center justify-between py-2 border-b border-gray-100">
                <span className="text-art-graphite">Artist</span>
                <span className="font-medium text-art-charcoal">{artwork.artist}</span>
              </div>
              
              <div className="flex items-center justify-between py-2 border-b border-gray-100">
                <span className="text-art-graphite">Medium</span>
                <span className="font-medium text-art-charcoal">{artwork.medium}</span>
              </div>
              
              <div className="flex items-center justify-between py-2 border-b border-gray-100">
                <span className="text-art-graphite">Size</span>
                <span className="font-medium text-art-charcoal">{artwork.size}</span>
              </div>
              
              <div className="flex items-center justify-between py-2 border-b border-gray-100">
                <span className="text-art-graphite">Creation Date</span>
                <span className="font-medium text-art-charcoal">
                  {new Date(artwork.creationDate).toLocaleDateString()}
                </span>
              </div>
              
              <div className="flex items-center justify-between py-2">
                <span className="text-art-graphite">Availability</span>
                <span className={`font-medium ${artwork.available ? 'text-green-600' : 'text-red-600'}`}>
                  {artwork.available ? 'Available' : 'Sold'}
                </span>
              </div>
            </div>
            
            <div className="flex items-center justify-between mb-8">
              <div>
                <span className="text-sm text-art-graphite">Price</span>
                <p className="text-3xl font-bold text-art-charcoal">${artwork.price}</p>
              </div>
              
              <Button 
                onClick={handleBuyNow} 
                className="bg-art-charcoal hover:bg-art-graphite text-white"
                disabled={!artwork.available}
              >
                {artwork.available ? 'Add to Cart' : 'Sold Out'}
              </Button>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold mb-3 text-art-charcoal">
                Want a custom portrait?
              </h3>
              <p className="text-art-graphite mb-4">
                Commission a unique portrait based on your own photographs.
              </p>
              <Link to="/custom-order">
                <Button variant="outline" className="border-art-charcoal text-art-charcoal hover:bg-art-charcoal hover:text-white">
                  Order Custom Portrait
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArtworkDetails;
