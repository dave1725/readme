/** @type {import('next').NextConfig} */
const nextConfig = {
    // Optimize images
    images: {
        formats: ['image/webp', 'image/avif'],
        deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
        imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    },

    // Compiler optimizations
    compiler: {
        // Remove console.log in production
        removeConsole: process.env.NODE_ENV === 'production',
    },

    // Bundle analyzer in development
    ...(process.env.ANALYZE === 'true' && {
        webpack: (config, { isServer }) => {
            if (!isServer) {
                config.resolve.fallback = {
                    ...config.resolve.fallback,
                    fs: false,
                };
            }
            return config;
        },
    }),

    // Optimizations
    poweredByHeader: false,
    reactStrictMode: true,

    // Enable compression
    compress: true,
};

export default nextConfig;
