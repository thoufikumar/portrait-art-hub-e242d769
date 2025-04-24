
import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "@/context/AuthContext";
import ImageCarousel from "@/components/ImageCarousel";
import { Button } from "@/components/ui/button";
import { featuredImages } from "@/data/artworks";

const Index = () => {
  const { isAuthenticated } = useAuth();

  return (
    <div className="min-h-screen animate-fade-in">
      {/* Hero Section */}
      <section className="bg-art-light-sketch py-12">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-art-charcoal">
            Bringing Memories to Life Through Art
          </h1>
          <p className="text-lg text-art-graphite max-w-2xl mx-auto mb-8">
            Custom portrait artwork created from your photos, capturing the moments and people you cherish.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/gallery">
              <Button className="bg-art-charcoal hover:bg-art-graphite text-white">
                Browse Gallery
              </Button>
            </Link>
            <Link to="/custom-order">
              <Button variant="outline" className="border-art-charcoal text-art-charcoal hover:bg-art-charcoal hover:text-white">
                Order Custom Portrait
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Artwork Carousel */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-art-charcoal">
            Featured Portraits
          </h2>
          <div className="max-w-4xl mx-auto">
            <ImageCarousel images={featuredImages} />
          </div>
          <div className="text-center mt-8">
            <Link to="/gallery">
              <Button variant="outline" className="border-art-charcoal text-art-charcoal hover:bg-art-charcoal hover:text-white">
                View All Artworks
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4 text-art-charcoal">
            Our Services
          </h2>
          <p className="text-art-graphite text-center max-w-2xl mx-auto mb-12">
            From classic portraits to custom artwork, we create timeless pieces that capture your special moments.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-semibold mb-3 text-art-charcoal">
                Custom Portraits
              </h3>
              <p className="text-art-graphite mb-4">
                Transform your favorite photos into beautiful hand-drawn portraits, perfect for preserving memories.
              </p>
              <Link to="/custom-order" className="text-art-charcoal font-medium hover:underline">
                Learn More →
              </Link>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-semibold mb-3 text-art-charcoal">
                Family Portraits
              </h3>
              <p className="text-art-graphite mb-4">
                Capture your family in a timeless artwork that celebrates your bond and creates a lasting heirloom.
              </p>
              <Link to="/custom-order" className="text-art-charcoal font-medium hover:underline">
                Learn More →
              </Link>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-semibold mb-3 text-art-charcoal">
                Memorial Portraits
              </h3>
              <p className="text-art-graphite mb-4">
                Honor the memory of loved ones with a sensitive and detailed portrait that captures their essence.
              </p>
              <Link to="/custom-order" className="text-art-charcoal font-medium hover:underline">
                Learn More →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-art-charcoal">
            Client Testimonials
          </h2>
          
          <div className="max-w-4xl mx-auto">
            <div className="bg-gray-50 p-8 rounded-lg border border-gray-100">
              <p className="text-lg text-art-graphite italic mb-6">
                "The portrait captured my husband's personality perfectly. The attention to detail is remarkable, and it's now the centerpiece of our living room. Worth every penny!"
              </p>
              <p className="font-medium text-art-charcoal">— Sarah Johnson</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-art-charcoal text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Transform Your Photos into Art?
          </h2>
          <p className="text-lg opacity-90 max-w-2xl mx-auto mb-8">
            Order your custom portrait today and preserve your precious memories in a timeless artwork.
          </p>
          <Link to="/custom-order">
            <Button className="bg-white text-art-charcoal hover:bg-gray-200">
              Start Your Custom Order
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Index;
