
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const AboutMe = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12 animate-fade-in">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-6 text-art-charcoal text-center">
            About the Artist
          </h1>
          
          <div className="bg-white rounded-lg shadow-sm overflow-hidden mb-12">
            <div className="md:flex">
              <div className="md:w-1/3">
                <img 
                  src="/lovable-uploads/a2b686ad-c5d4-4cc0-bf2d-a5b78a17a158.png" 
                  alt="Portrait Artist" 
                  className="w-full h-full object-cover object-center"
                />
              </div>
              <div className="md:w-2/3 p-8">
                <h2 className="text-2xl font-bold mb-4 text-art-charcoal">Sarah Johnson</h2>
                <p className="text-art-graphite mb-4">
                  Portrait Artist & Illustrator
                </p>
                <div className="space-y-4 text-art-graphite">
                  <p>
                    I'm a professional portrait artist with over 10 years of experience specializing in realistic pencil portraits. My passion is capturing the essence and emotion of people through detailed artwork.
                  </p>
                  <p>
                    Each portrait is meticulously crafted by hand using the finest materials, with particular attention to the details that make each individual unique.
                  </p>
                  <p>
                    I believe that a great portrait goes beyond mere likeness—it captures personality, emotion, and the subtle nuances that make each person special.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Artist's Journey */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-6 text-art-charcoal">My Artistic Journey</h2>
            <div className="space-y-6 text-art-graphite">
              <p>
                My journey as an artist began in childhood, where I spent countless hours sketching friends and family members. After formal training in Fine Arts at the University of Arts, I dedicated myself to mastering the techniques of realistic portraiture.
              </p>
              <p>
                Over the years, I've had the privilege of creating hundreds of portraits for clients worldwide, from family memorials to celebrity commissions. Each project has been an opportunity to connect with people and tell their stories through art.
              </p>
              <p>
                I work primarily with graphite pencils on archival-quality paper, focusing on the interplay of light and shadow to create depth and dimension. My style combines technical precision with emotional expressiveness.
              </p>
            </div>
          </div>
          
          {/* Process */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-6 text-art-charcoal">My Process</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="text-art-charcoal font-bold text-4xl mb-4">01</div>
                <h3 className="font-semibold mb-2 text-art-charcoal">Consultation</h3>
                <p className="text-sm text-art-graphite">
                  We begin with a detailed discussion of your vision for the portrait, preferred style, and reference photos.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="text-art-charcoal font-bold text-4xl mb-4">02</div>
                <h3 className="font-semibold mb-2 text-art-charcoal">Initial Sketch</h3>
                <p className="text-sm text-art-graphite">
                  I create a preliminary sketch for your approval before proceeding with the detailed work.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="text-art-charcoal font-bold text-4xl mb-4">03</div>
                <h3 className="font-semibold mb-2 text-art-charcoal">Final Portrait</h3>
                <p className="text-sm text-art-graphite">
                  The finished portrait is carefully crafted, with meticulous attention to every detail.
                </p>
              </div>
            </div>
          </div>
          
          {/* Testimonials */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-6 text-art-charcoal">Client Testimonials</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <p className="italic text-art-graphite mb-4">
                  "Sarah captured my daughter's personality perfectly. The level of detail is breathtaking, and it's now our family's most treasured possession."
                </p>
                <p className="font-medium text-art-charcoal">— Michael R.</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <p className="italic text-art-graphite mb-4">
                  "I commissioned a portrait of my late grandfather, and Sarah created something truly special. She didn't just copy a photo—she captured his spirit."
                </p>
                <p className="font-medium text-art-charcoal">— Jennifer T.</p>
              </div>
            </div>
          </div>
          
          {/* Contact & CTA */}
          <div className="text-center bg-white p-8 rounded-lg shadow-sm">
            <h2 className="text-2xl font-bold mb-4 text-art-charcoal">
              Ready to Preserve Your Memories?
            </h2>
            <p className="text-art-graphite mb-6">
              I'd love to create a custom portrait that you'll treasure for years to come.
            </p>
            <Link to="/custom-order">
              <Button className="bg-art-charcoal hover:bg-art-graphite">
                Commission a Portrait
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
