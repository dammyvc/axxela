/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  transpilePackages: ['@mui/x-charts'],
  output: 'export',
  images: {
    unoptimized: true,
  },
  webpack(config, { isServer }) {
    // Add a loader for font files
    config.module.rules.push({
      test: /\.(woff|woff2|eot|ttf|otf)$/i,
      use: {
        loader: 'file-loader',
        options: {
          outputPath: 'static/fonts',
          publicPath: '/_next/static/fonts',
          name: '[name].[ext]',
        },
      },
    });

    // Add a loader for React Native files
    config.module.rules.push({
      test: /\.js$/,
      include: /node_modules\/react-native/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: [
            '@babel/preset-env',
            '@babel/preset-react',
            '@babel/preset-flow',
          ],
          plugins: ['@babel/plugin-transform-flow-strip-types'],
        },
      },
    });

    if (!isServer) {
      // Fix the issue with React Native's use of timers
      config.resolve.alias['react-native$'] = 'react-native-web';
    }

    return config;
  },
};

module.exports = nextConfig;
