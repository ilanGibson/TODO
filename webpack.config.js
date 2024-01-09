const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  devtool: "inline-source-map",
  plugins: [
    new HtmlWebpackPlugin({
        title: 'TODO List',
        }),
    ],
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
    module: {
        rules: [
        {
            test: /\.css$/i,
            use: ['style-loader', 'css-loader'],
        },
        {
            test: /\.(png|svg|jpg|jpeg|gif)$/i,
            use: [
              {
                loader: 'file-loader',
                options: {
                  name: '[path][name].[ext]',
                  outputPath: 'images/',
                  publicPath: 'images/',
                }
              },
            ],
        }
      ] // Add closing parenthesis here
    }
}; // Add closing parenthesis here
