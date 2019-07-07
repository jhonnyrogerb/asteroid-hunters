const HtmlWebPackPlugin = require("html-webpack-plugin");
const path = require('path');

module.exports = {
    devtool: 'source-map',
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
        })
    ],
    resolve: {
        extensions: ['*', '.js', '.jsx'],
        modules: [path.resolve(__dirname, './src'), 'node_modules'],
        alias: {
            '~': path.resolve(__dirname, './src')
        }
    },
    output: {
        filename: '[name].[hash].js',
    },
};