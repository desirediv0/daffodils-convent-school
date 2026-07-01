/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'desirediv-storage.blr1.cdn.digitaloceanspaces.com',
      },
    ],
  },
};

export default nextConfig;
