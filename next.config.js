/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Remove appDir as it's no longer needed in Next.js 15
  // Handle Edge Runtime configuration
  async headers() {
    return [
      {
        source: '/((?!api/|_next/|_static/|examples/|[\\w-]+\\.\\w+).*)',
        headers: [
          {
            key: 'x-edge-runtime',
            value: '1',
          },
        ],
      },
    ]
  },
}

module.exports = nextConfig

