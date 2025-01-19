/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    appDir: true,
  },
  // Specify which routes should use Edge Runtime
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

