import path from 'path';
import webpack from 'webpack';
const bundlePath = path.resolve(__dirname, 'dist/');

module.exports = {
  entry: './src/web/index.js',
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        options: {
          presets: ['env'],
          plugins: ['transform-class-properties']
        }
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: {}
          }
        ]
      }
    ]
  },
  resolve: { extensions: ['*', '.js', '.jsx', '.png', '.jpg', '.gif'] },
  output: {
    publicPath: bundlePath,
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: path.join(__dirname, 'public'),
    port: 3000,
    publicPath: 'http://localhost:3000/dist'
  },
  plugins: [new webpack.HotModuleReplacementPlugin()]
};
