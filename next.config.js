/** @type {import('next').NextConfig} */
import('dotenv').config;
const nextConfig = {
  reactStrictMode: true,
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack', 'url-loader'],
    });

    return config;
  },
  env: {
    PINATA_ENDPOINT: 'https://api.pinata.cloud',
    PINATA_API_KEY: '76c0b79ce776e069ef59',
    PINATA_SECRET:
      '7992ba5197e67661f14e435118c2fa652c14637a11d2361467657e2451642e82',
    INFURA_ID:"2Lpiiys4JKyOVdgTQqWPGYbqHHE",
    INFURA_KEY:"c2b9dd9f44625371a95afff271e5efbd",
    INFURA_ENDPOINT:"https://ipfs.infura.io:5001"
  },
};

module.exports = nextConfig;
