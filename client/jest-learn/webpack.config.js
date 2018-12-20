module.exports = {
  entry: './src/client/index.tsx',
  output: {
    filename: 'target/bundle.js'
  },
  devtool: 'source-map',
  mode: "development",
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.json']
  },
  module: {
    rules: [
      {
        test: /.tsx?$/,
        loader: 'awesome-typescript-loader',
        exclude: /node_modules/,
      }, {
        test: /.js$/,
        loader: 'source-map-loader',
        enforce: 'pre',
      }
    ]
  }
};