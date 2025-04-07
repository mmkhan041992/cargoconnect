/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Enable React Native Web compatibility
  webpack: (config) => {
    config.resolve.alias = {
      ...(config.resolve.alias || {}),
      'react-native$': 'react-native-web',
    };
    return config;
  },
};

module.exports = nextConfig;