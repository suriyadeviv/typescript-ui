/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
    i18n: {
        locales: ['en-GB'],
        defaultLocale: 'en-GB',
    },
    images: {
        domains: ['johnlewis.scene7.com'],
    },
    webpack(config) {
        // Add rule to handle SVG imports
        config.module.rules.push({
          test: /\.svg$/,
          use: ['@svgr/webpack'],
        });
    
        return config;
      },
}

module.exports = nextConfig