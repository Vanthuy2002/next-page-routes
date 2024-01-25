/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placehold.co',
        port: '',
        pathname: '/*/**'
      },
      {
        protocol: 'https',
        hostname:
          'https://food-meals-ap-southeast-1.s3.ap-southeast-1.amazonaws.com',
        port: '',
        pathname: '/*/**'
      }
    ]
  }
}

module.exports = nextConfig
