/** @type {import('next').NextConfig} */
const nextConfig = {
  images:  {
    domains: ['www.themealdb.com'],
  },
  
  async redirects() {
    return [
      // Basic redirect
      {
        source: '/products/add',
        destination: '/dashboard/products/add',
        permanent: true,
      },
      // Wildcard path matching
      
    ]
  },
};

export default nextConfig;
