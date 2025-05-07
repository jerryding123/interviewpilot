/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  
  // Add page extensions to ensure all your file types are recognized
  pageExtensions: ['tsx', 'ts', 'jsx', 'js'],
  
  // If you're using both app and pages directories
  experimental: {
    // Enable app directory for App Router features if needed
    appDir: true,
  },
  
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: [
        {
          loader: '@svgr/webpack',
          options: {
            svgoConfig: {
              plugins: [
                {
                  name: 'removeViewBox',
                  active: false,
                },
              ],
            },
          },
        },
      ],
    })
    return config
  },
}

export default nextConfig