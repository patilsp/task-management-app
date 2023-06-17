/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    appDir: true,
  },
  images: {
    domains: ["upload.wikimedia.org", "cloud.appwrite.io"],
  },
}

export default nextConfig
