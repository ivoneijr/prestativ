/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true
  },
  env: {
    NEXTAUTH_SECRET: 'rootsrockreggae',
    NEXTAUTH_URL: 'http://localhost:3000'
  }
};

module.exports = nextConfig;
