/** @type {import('next').NextConfig} */
const nextConfig = {
    /* config options here */
    reactCompiler: true,
    turbopack: {
        rules: {
            "*.css": {
                loaders: ["@tailwindcss/turbopack"],
                as: "*.css",
            },
        },
    },
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "images.unsplash.com",
                port: "",
                pathname: "/**",
            },
            {
                protocol: "https",
                hostname: "covers.openlibrary.org",
                port: "",
                pathname: "/b/isbn/**",
            },
        ],
    },
};

export default nextConfig;
