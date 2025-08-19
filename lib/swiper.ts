// lib/swiper.ts

export type Slide = {
  id: number;
  image: string;
  title: string;
  description: string;
  link: string;
};

export const slides: Slide[] = [
  {
    id: 1,
    image: "/images/slide1.jpeg",
    title: "Welcome to Our Platform",
    description: "Discover amazing features built just for you.",
    link: "/features",
  },
  {
    id: 2,
    image: "/images/slide2.jpeg",
    title: "Stay Connected",
    description: "Seamlessly collaborate with your team anywhere.",
    link: "/collaboration",
  },
  {
    id: 3,
    image: "/images/slide3.jpeg",
    title: "Get Started Today",
    description: "Join thousands of users already enjoying our services.",
    link: "/signup",
  },
];
