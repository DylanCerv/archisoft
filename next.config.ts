import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: ['*', 'images.unsplash.com'], // Agrega 'unsplash.com' a la lista de dominios permitidos
  },
};

export default nextConfig;
