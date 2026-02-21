import path from "path"

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
  webpack: (config) => {
    config.resolve.alias["@" ] = path.resolve("./")
    return config
  }
}

export default nextConfig
