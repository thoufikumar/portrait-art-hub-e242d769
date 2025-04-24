
import React, { useState } from "react";
import { useAuth } from "@/context/AuthContext";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useToast } from "@/components/ui/use-toast";

const CustomOrder = () => {
  const { isAuthenticated } = useAuth();
  const { toast } = useToast();
  
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    portraitSize: "medium",
    numberOfSubjects: "1",
    additionalDetails: "",
    referenceImage: null as File | null,
  });
  
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  
  const handleSelectChange = (name: string, value: string) => {
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFormData({
        ...formData,
        referenceImage: e.target.files[0],
      });
    }
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // In a real app, you'd upload the form data and image to your backend
    toast({
      title: "Order Submitted!",
      description: "We'll review your request and contact you soon.",
    });
    
    console.log("Order submitted:", formData);
    
    // Reset form
    setFormData({
      name: "",
      email: "",
      portraitSize: "medium",
      numberOfSubjects: "1",
      additionalDetails: "",
      referenceImage: null,
    });
  };

  // Calculate price based on selections
  const getBasePrice = () => {
    const sizeMultiplier = { small: 1, medium: 1.5, large: 2 };
    const subjectsMultiplier = { "1": 1, "2": 1.5, "3+": 2 };
    
    const basePrice = 100;
    return Math.round(
      basePrice * 
      sizeMultiplier[formData.portraitSize as keyof typeof sizeMultiplier] * 
      subjectsMultiplier[formData.numberOfSubjects as keyof typeof subjectsMultiplier]
    );
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 animate-fade-in">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-6 text-art-charcoal text-center">
          Custom Portrait Order
        </h1>
        <p className="text-lg text-art-graphite max-w-2xl mx-auto mb-12 text-center">
          Get a personalized portrait created from your photo. Upload your image and provide details for your custom artwork.
        </p>

        {isAuthenticated ? (
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 max-w-6xl mx-auto">
            {/* Order Form */}
            <div className="lg:col-span-3">
              <Card>
                <CardHeader>
                  <CardTitle>Order Details</CardTitle>
                  <CardDescription>
                    Please fill out the form below with your portrait requirements.
                  </CardDescription>
                </CardHeader>
                <form onSubmit={handleSubmit}>
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name">Full Name</Label>
                        <Input
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          placeholder="Your name"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="Your email"
                          required
                        />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="portraitSize">Portrait Size</Label>
                      <Select
                        value={formData.portraitSize}
                        onValueChange={(value) => handleSelectChange("portraitSize", value)}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select size" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="small">Small (8"×10")</SelectItem>
                          <SelectItem value="medium">Medium (11"×14")</SelectItem>
                          <SelectItem value="large">Large (16"×20")</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div className="space-y-2">
                      <Label>Number of Subjects</Label>
                      <RadioGroup
                        value={formData.numberOfSubjects}
                        onValueChange={(value) => handleSelectChange("numberOfSubjects", value)}
                        className="flex space-x-4"
                      >
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="1" id="subjects-1" />
                          <Label htmlFor="subjects-1" className="cursor-pointer">1 Subject</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="2" id="subjects-2" />
                          <Label htmlFor="subjects-2" className="cursor-pointer">2 Subjects</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="3+" id="subjects-3plus" />
                          <Label htmlFor="subjects-3plus" className="cursor-pointer">3+ Subjects</Label>
                        </div>
                      </RadioGroup>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="referenceImage">Upload Reference Photo</Label>
                      <Input
                        id="referenceImage"
                        type="file"
                        accept="image/*"
                        onChange={handleFileChange}
                        required
                        className="cursor-pointer"
                      />
                      <p className="text-xs text-art-graphite mt-1">
                        Please upload a clear, high-quality photo for best results.
                      </p>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="additionalDetails">Additional Details</Label>
                      <Textarea
                        id="additionalDetails"
                        name="additionalDetails"
                        value={formData.additionalDetails}
                        onChange={handleInputChange}
                        placeholder="Any specific requirements or preferences for your portrait..."
                        rows={4}
                      />
                    </div>
                  </CardContent>
                  
                  <CardFooter>
                    <Button type="submit" className="w-full bg-art-charcoal hover:bg-art-graphite">
                      Place Order
                    </Button>
                  </CardFooter>
                </form>
              </Card>
            </div>
            
            {/* Order Summary */}
            <div className="lg:col-span-2">
              <Card>
                <CardHeader>
                  <CardTitle>Order Summary</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-art-graphite">Custom Portrait ({formData.portraitSize})</span>
                      <span>${getBasePrice()}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-art-graphite">Subjects: {formData.numberOfSubjects}</span>
                      <span>Included</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-art-graphite">Shipping</span>
                      <span>Free</span>
                    </div>
                    <div className="border-t border-gray-200 pt-2 mt-2">
                      <div className="flex justify-between font-semibold">
                        <span>Total</span>
                        <span>${getBasePrice()}</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-medium mb-2">How it works:</h4>
                    <ol className="list-decimal list-inside text-sm space-y-2 text-art-graphite">
                      <li>Submit your order with a reference photo</li>
                      <li>We'll contact you to confirm details</li>
                      <li>Work begins after payment confirmation</li>
                      <li>Review a digital proof before completion</li>
                      <li>Receive your finished portrait</li>
                    </ol>
                  </div>
                </CardContent>
              </Card>
              
              {/* Examples */}
              <Card className="mt-6">
                <CardHeader>
                  <CardTitle>Sample Works</CardTitle>
                  <CardDescription>Examples of custom portraits</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-2">
                    <div className="aspect-square overflow-hidden rounded-md">
                      <img
                        src="/lovable-uploads/a2b686ad-c5d4-4cc0-bf2d-a5b78a17a158.png"
                        alt="Sample portrait"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="aspect-square overflow-hidden rounded-md">
                      <img
                        src="/lovable-uploads/a2b686ad-c5d4-4cc0-bf2d-a5b78a17a158.png"
                        alt="Sample portrait"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        ) : (
          <div className="max-w-md mx-auto text-center bg-white p-8 rounded-lg shadow-sm">
            <h2 className="text-2xl font-bold mb-4 text-art-charcoal">
              Please Log In to Order
            </h2>
            <p className="text-art-graphite mb-6">
              You must be logged in to place a custom portrait order.
            </p>
            <div className="flex justify-center gap-4">
              <Link to="/login">
                <Button className="bg-art-charcoal hover:bg-art-graphite">
                  Log In
                </Button>
              </Link>
              <Link to="/signup">
                <Button variant="outline" className="border-art-charcoal text-art-charcoal hover:bg-art-charcoal hover:text-white">
                  Sign Up
                </Button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CustomOrder;
