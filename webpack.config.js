const webpack = require('webpack')
const miniCss = require('mini-css-extract-plugin');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: './src/main.js',
    output: {
        path: __dirname + '/public',
        filename: 'app.js',
        assetModuleFilename: 'assets/images/[name]-[hash][ext]'
    },
    devServer: {
        port: 5000,
        static: './public',
        hot: true
    },
    module: {
        rules: [
          {
            test: /\.(png|svg|jpg|jpeg|gif)$/i,
            type: 'asset/resource',
          },
            { test: /\.(s*)css$/, use: [
              {loader: miniCss.loader},
							{loader: 'css-loader', options: {url: false}},
							{loader: 'sass-loader'},
						] },
         ]
      },
      plugins: [
        new miniCss({
           filename: 'app.css',
        }),
        new CopyPlugin({patterns: [{ from: 'src/libs/', to: 'libs/' }, { from: 'src/fonts/', to: 'fonts/' }, { from: 'src/images/', to: 'images/' }]}),
     ]
}
