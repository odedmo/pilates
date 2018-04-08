import webpack from 'webpack';
import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import UglifyJsPlugin from 'uglifyjs-webpack-plugin';

import MiniCssExtractPlugin from 'mini-css-extract-plugin';

export default {
  entry: "./main.ts",
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: "main.js"
  },
  devtool: 'source-map',
  mode: 'none',
  module: {
    rules: [
      { test: /.ts$/, use: 'ts-loader' },
      { test: /.ts$/, use: 'angular2-template-loader' },
      { test: /\.(html)$/, use: 'html-loader?-minimize' },
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader', 
          'sass-loader'
        ]
      }
    ]
  },
  resolve: {
    extensions: ['.js' , '.webpack.js', '.web.js', '.ts']
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        styles: {
          name: 'style',
          test: /\.scss$/,
          chunks: 'all',
          enforce: true
        }
      }
    }
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
    // new ExtractTextPlugin('style.css'),
    new MiniCssExtractPlugin({
      filename: "[name].css",
    }),
    new UglifyJsPlugin({
      sourceMap: true
    })
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