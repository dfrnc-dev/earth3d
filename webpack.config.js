const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const {CleanWebpackPlugin} = require('clean-webpack-plugin')
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");

const webpack = require('webpack');
const TerserPlugin = require('terser-webpack-plugin');

const PROD = process.argv[process.argv.indexOf('--mode') + 1] === 'production';
console.log("PROD - " + PROD)


module.exports = {
    context: path.resolve(__dirname,'src'),
    entry: './index.js',
    output: {
        // filename: (PROD) ? 'anim_js.min.js' : 'anim_js.js',
        filename: 'assets/js/anim_js.js',
        path: path.resolve(__dirname, 'dist')
    },
    resolve:{
        extensions: ['.js'], // extension that is too lazy to write
        alias:{ // the path to the folder
            "@assets": path.resolve(__dirname,"src/assets"),
            "@css": path.resolve(__dirname,"src/assets/css"),
        }
    },
    optimization:{
        splitChunks:{
            chunks: "all"
        }
    },
    devServer:{
        port: 4200
    },
    devtool: 'source-map',
    plugins: [
        new HtmlWebpackPlugin({
            template: "./index.html"
        }),
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin({
            // filename: "anim_css.css",
            filename: "assets/css/anim_css.css",
        })
    ],
    module:{
        rules:[
            {
                test: /\.css$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    {
                        loader: 'css-loader',
                        options: {
                            url: false,
                            sourceMap: true
                        }
                    },
                    {
                        loader: "sass-loader",
                        options: {
                            sourceMap: true
                        },
                    },
                ]
            },
            {
                test: /\.(png|jpg|gif|svg|tif)$/,
                use: [{
                    loader: 'file-loader',
                    options: {
                        outputPath: (url, resourcePath, context) => {
                            if (/textures/.test(resourcePath)) {
                                return `assets/model/textures/${url}`;
                            }
                            return `assets/img/${url}`;
                        },
                        name: '[name].[ext]',
                    },
                }]
            },
            {
                test: /\.(ttf|woff(2)?|eot)$/,
                use: [
                    {
                        loader: "file-loader",
                        options: {
                            name: '[name].[ext]',
                            outputPath: 'assets/fonts',
                            publicPath: 'assets/fonts',
                            useRelativePaths: true
                        }
                    }
                ]
            },
            {
                test: /\.(glb|gltf|bin)$/,
                use: [
                    {
                        loader: "file-loader",
                        options: {
                            outputPath: 'assets/model/',
                            name: '[name].[ext]',
                        }
                    }
                ]
            },
            {
                test: /\.glsl$/,
                loader: 'webpack-glsl-loader'
            },
            {
                test: /\.mp3$/,
                use: [
                    {
                        loader: "file-loader",
                        options: {
                            outputPath: 'assets/media/',
                            name: '[name].[ext]',
                        }
                    }
                ]
            }

        ]
    },
    optimization: {
        minimize: PROD,
        minimizer: [
            new CssMinimizerPlugin(),
            new TerserPlugin({
                terserOptions: {
                    format: {
                        comments: false,
                    },
                },
                extractComments: false,
                parallel: true
            })
        ],
    },
};

