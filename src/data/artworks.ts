
export interface Artwork {
  id: string;
  title: string;
  imageUrl: string;
  description: string;
  artist: string;
  price: number;
  size: string;
  medium: string;
  creationDate: string;
  available: boolean;
}

export const artworks: Artwork[] = [
  {
    id: "1",
    title: "Thomas Shelby Portrait",
    imageUrl: "/lovable-uploads/a2b686ad-c5d4-4cc0-bf2d-a5b78a17a158.png", 
    description: "A detailed pencil portrait capturing the intense gaze and distinctive features of Thomas Shelby.",
    artist: "Portrait Artist",
    price: 250,
    size: "11 x 14 inches",
    medium: "Graphite pencil on high-quality paper",
    creationDate: "2023-04-15",
    available: true
  },
  {
    id: "2",
    title: "Couple's Intimate Portrait",
    imageUrl: "/lovable-uploads/a2b686ad-c5d4-4cc0-bf2d-a5b78a17a158.png",
    description: "A tender moment between a couple, showcasing the depth of their connection and emotions.",
    artist: "Portrait Artist",
    price: 350,
    size: "14 x 18 inches",
    medium: "Graphite pencil on high-quality paper",
    creationDate: "2023-06-22",
    available: true
  },
  {
    id: "3",
    title: "Bearded Man Character Study",
    imageUrl: "/lovable-uploads/a2b686ad-c5d4-4cc0-bf2d-a5b78a17a158.png",
    description: "A character study capturing the rugged features and intensity of a bearded man, with impeccable detail in the facial hair and expression.",
    artist: "Portrait Artist",
    price: 280,
    size: "11 x 14 inches",
    medium: "Graphite pencil on high-quality paper",
    creationDate: "2023-08-03",
    available: true
  },
  {
    id: "4",
    title: "Personal Portrait Study",
    imageUrl: "/lovable-uploads/a2b686ad-c5d4-4cc0-bf2d-a5b78a17a158.png",
    description: "A detailed portrait study showcasing the artist's skill in capturing likeness and emotion through pencil work.",
    artist: "Portrait Artist",
    price: 220,
    size: "9 x 12 inches",
    medium: "Graphite pencil on high-quality paper",
    creationDate: "2023-09-14",
    available: true
  }
];

export const featuredImages = artworks.map(artwork => ({
  id: artwork.id,
  src: artwork.imageUrl,
  alt: artwork.title
}));
