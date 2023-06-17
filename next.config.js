/** @type {import('next').NextConfig} */
const { i18n } = require("./next-i18next.config")

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  i18n,
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: [
        {
          loader: "@svgr/webpack",
        },
      ],
    })

    return config
  },
  compiler: {
    styledComponents: true,
  },
}

module.exports = nextConfig
