/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "images.unsplash.com",
            },
            {
                protocol: 'https',
                hostname: 'i.ibb.co',
                port: '',
                pathname: '/rfzkRpJ3/**',
                search: '',
            },
        ],
    },
};

export default nextConfig;
