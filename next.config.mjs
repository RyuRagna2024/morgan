// next.config.mjs

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Moved serverComponentsExternalPackages out of experimental and renamed it
  serverExternalPackages: ["@node-rs/argon2"],

  experimental: {
    serverActions: {
      enabled: true,
    },
  },

  // --- Add this images configuration block ---
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "source.unsplash.com",
        // Optional: You can specify port and pathname if needed, but usually not for Unsplash
        // port: '',
        // pathname: '/random/**', // Example if you only wanted /random paths
      },
      // Add other hostnames here if you use other external image sources
      // {
      //   protocol: 'https',
      //   hostname: 'other-image-host.com',
      // },
    ],
  },
  // ----------------------------------------
};

export default nextConfig;
