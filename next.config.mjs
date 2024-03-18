/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
      serverActions: {}, // Set to an empty object
      serverComponentsExternalPackages: ["mongoose"],
  },
  images: {
      remotePatterns: [
          {
              protocol: "https",
              hostname: "img.clerk.com",
          },
          {
              protocol: "https",
              hostname: "images.clerk.dev",
          },
          {
              protocol: "https",
              hostname: "uploadthing.com",
          },
          {
              protocol: "https",
              hostname: "placehold.co",
          },
      ],
      // Remove the 'typescript' key, as it is not recognized
    },
};

export default nextConfig;
