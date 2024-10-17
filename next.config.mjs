import NextFederationPlugin from '@module-federation/nextjs-mf';

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack(config, options) {
    if (!options.isServer) {
      config.plugins.push(
        new NextFederationPlugin({
          name: 'remote',
          library: { type: 'var', name: 'remote' },
          filename: 'static/chunks/remoteEntry.js',
          dts: false,
          exposes: {
            './uicounter': './src/stories/Counter',
          },
          shared: {
            react: {
              singleton: true,
              version: '0',
              requiredVersion: false,
            },
            'react-dom': {
              requiredVersion: false,
              singleton: true,
              version: '0',
            },
          },
          extraOptions: {
            exposePages: true,
          },
        }),
      );
    }

    return config;
  },
};

export default nextConfig;
