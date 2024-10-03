const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: './src/index.tsx',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
  },
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx', '.svg'], // Ensure SVG is included
  },
  module: {
    rules: [
      {
        test: /\.svg$/,
        oneOf: [
          {
            resourceQuery: /react/, // Usage: import { ReactComponent as Logo } from './logo.svg?react';
            use: ['@svgr/webpack'], // For React components
          },
          {
            loader: 'file-loader', // Default loading for SVGs
            options: {
              name: '[path][name].[ext]',
            },
          },
        ],
      },
      {
        test: /\.(js|jsx|ts|tsx)$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
    ],
  },
  plugins: [
    new webpack.DefinePlugin({
      __dirname: JSON.stringify(__dirname),
    }),
  ],
};
