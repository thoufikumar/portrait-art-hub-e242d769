
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { artworks } from "@/data/artworks";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const Gallery = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOrder, setSortOrder] = useState("default");

  const filteredArtworks = artworks.filter((artwork) => 
    artwork.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    artwork.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const sortedArtworks = [...filteredArtworks].sort((a, b) => {
    switch (sortOrder) {
      case "price-asc":
        return a.price - b.price;
      case "price-desc":
        return b.price - a.price;
      case "newest":
        return new Date(b.creationDate).getTime() - new Date(a.creationDate).getTime();
      default:
        return 0;
    }
  });

  return (
    <div className="min-h-screen bg-gray-50 py-12 animate-fade-in">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-6 text-art-charcoal text-center">
          Portrait Gallery
        </h1>
        <p className="text-lg text-art-graphite max-w-2xl mx-auto mb-12 text-center">
          Browse through our collection of handcrafted portraits, each created with precision and care.
        </p>

        {/* Filter and Sort Controls */}
        <div className="flex flex-col sm:flex-row gap-4 mb-8 max-w-4xl mx-auto">
          <div className="flex-1">
            <Input
              type="text"
              placeholder="Search artworks..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full"
            />
          </div>
          <div className="w-full sm:w-48">
            <Select value={sortOrder} onValueChange={setSortOrder}>
              <SelectTrigger>
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="default">Featured</SelectItem>
                <SelectItem value="price-asc">Price: Low to High</SelectItem>
                <SelectItem value="price-desc">Price: High to Low</SelectItem>
                <SelectItem value="newest">Newest</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Artworks Grid */}
        {sortedArtworks.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {sortedArtworks.map((artwork) => (
              <Link to={`/artwork/${artwork.id}`} key={artwork.id}>
                <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                  <div className="aspect-[4/5] overflow-hidden">
                    <img
                      src={artwork.imageUrl}
                      alt={artwork.title}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="text-xl font-semibold mb-2 text-art-charcoal">
                      {artwork.title}
                    </h3>
                    <p className="text-sm text-art-graphite mb-2 line-clamp-2">
                      {artwork.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-art-charcoal font-medium">
                        ${artwork.price}
                      </span>
                      <span className={`text-sm ${artwork.available ? 'text-green-600' : 'text-red-600'}`}>
                        {artwork.available ? 'Available' : 'Sold'}
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-xl text-art-graphite">
              No artworks found matching your search.
            </p>
          </div>
        )}

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <h2 className="text-2xl font-bold mb-4 text-art-charcoal">
            Looking for something more personal?
          </h2>
          <p className="text-lg text-art-graphite max-w-2xl mx-auto mb-6">
            Commission a custom portrait from your own photos.
          </p>
          <Link to="/custom-order">
            <Button className="bg-art-charcoal hover:bg-art-graphite text-white">
              Order Custom Portrait
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
