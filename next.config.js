/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['spoonacular.com/recipeImages/'],
  },
}

module.exports = nextConfig
