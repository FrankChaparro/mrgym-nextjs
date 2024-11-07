import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        source: '/auth/:path*',  // Captura todas las solicitudes que empiecen con /auth
        destination: 'https://mrgymbackendspringboot-production-2dcf.up.railway.app/auth/:path*',  // Redirige al backend real
      },
    ];
  },
};

export default nextConfig;
