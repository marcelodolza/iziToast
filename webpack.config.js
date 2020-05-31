const TerserJSPlugin = require('terser-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = (env, options) => ({
  optimization: {
    minimizer: [new TerserJSPlugin({})],
  },
  entry: [__dirname + '/src/js/iziToast.js', __dirname + '/src/css/style.styl'],
  output: {
    path: __dirname + '/dist/js',
    filename: 'iziToast.min.js'
  },
  resolve: {
    extensions: ['.js', '.styl']
  },
  module: {
    rules: [
      {
        test: /\.styl$/,
        //loader: 'style-loader!css-loader!stylus-loader',
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              publicPath: __dirname + '/src/css',
            },
          },
          {
            loader: 'css-loader',
            options: {}
          },
          {
            loader: 'stylus-loader',
            options: {}
          }
        ]
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({ filename:  '../css/iziToast.css' }),
    new MiniCssExtractPlugin({ filename:  '../css/iziToast.min.css' }),
    new OptimizeCSSAssetsPlugin({
      assetNameRegExp: /iziToast.min\.css/g
    }),
    new CopyWebpackPlugin([{ from: './src/js/iziToast.js', to: './' }])
  ]
});