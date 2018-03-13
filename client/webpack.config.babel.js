import webpack from 'webpack';
import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import ExtractTextPlugin from 'extract-text-webpack-plugin';

export default {
  entry: "./main.ts",
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: "main.js"
  },
  devtool: 'source-map',
  module: {
    rules: [
      { test: /.ts$/, use: 'ts-loader' },
      { test: /.ts$/, use: 'angular2-template-loader' },
      {
        test: /\.(html)$/, use: 'html-loader' },
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
            fallback: 'style-loader',
            use: ['css-loader', 'sass-loader']
        })
      }
    ]
  },
  resolve: {
    extensions: ['.js' , '.webpack.js', '.web.js', '.ts']
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'index.html'
    }),
    // fix warnings
    new webpack.ContextReplacementPlugin(
      // The (\\|\/) piece accounts for path separators in *nix and Windows
      /angular(\\|\/)core(\\|\/)(@angular|esm5)/,
      path.resolve(__dirname, '../src')
    ),
    new ExtractTextPlugin('style.css')
  ],
  devServer: {
    historyApiFallback: true,
    proxy: {
        '/api/*': {
            target: "http://localhost:3000",
        }
    }
  }
};