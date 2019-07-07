const HtmlWebPackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require('copy-webpack-plugin');
const path = require('path');

module.exports = {
    devtool: 'source-map',
    context: path.resolve(__dirname, './client'),
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.css$/,
                use: [{
                    loader: "style-loader"
                },
                {
                    loader: "css-loader",
                    options: {
                        sourceMap: true,
                        modules: {
                            localIdentName: "[path][name]__[local]___[hash:base64:5]"
                        }
                    }
                }]
            },
            {
                test: /\.html$/,
                use: [
                    {
                        loader: "html-loader"
                    }
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: "./public/index.html",
            filename: "./index.html"
        }),
        new CopyWebpackPlugin([
            { from: './public' }
        ]),
    ],
    resolve: {
        extensions: ['*', '.js', '.jsx'],
        modules: [path.resolve(__dirname, './client/src'), 'node_modules'],
        alias: {
            '~': path.resolve(__dirname, './client/src')
        }
    },
    output: {
        filename: '[name].[hash].js',
    },
    devServer: {
        contentBase: '../dist',
        filename: '[name].[hash].js',
        hot: true
    }
};