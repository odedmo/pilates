import HtmlWebpackPlugin from 'html-webpack-plugin';

export default {
  entry: "./main.ts",
  output: {
    path: __dirname,
    filename: "main.js"
  },
  module: {
    loaders: [
        { test: /.ts$/, loader: "ts-loader" }
    ]
  },
  resolve: {
    extensions: ['.js' , '.webpack.js', '.web.js', '.ts']
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'index.html'
    })
  ]
};