// Webpack v4
const path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
    entry: { main: './src/index.js' },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'boundle.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.scss$/,
                use: ExtractTextPlugin.extract({
                    fallback: { loader: 'style-loader' },
                    use: ['css-loader', 'sass-loader'],
                }),
            },
            {
                test: /\.html$/,
                use: {
                    loader: "html-loader"
                },
            },

        ]
    },
plugins: [
    new CleanWebpackPlugin('dist', {} ),
    new ExtractTextPlugin({
        filename: 'style.css',
        disable: false,
        allChunks: true
    }),
    new HtmlWebpackPlugin({
        inject: 'body',
        template: './src/index.html',
        filename: 'index.html'
    }),
    ]
};