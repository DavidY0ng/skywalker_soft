/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export', // If you want static HTML export
    images: {
        unoptimized: true // Required for static export
    }
}

export default nextConfig;
