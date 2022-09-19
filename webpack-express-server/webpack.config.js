const { resolve } = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

// 设置nodejs环境变量
process.env.NODE_ENV = 'development'

module.exports = {
    entry: './src/index.js',

    output: {
        filename: 'js/[name].bundle.js',
        // 当前文件的目录绝对路径
        path: resolve(__dirname, 'dist'),
        assetModuleFilename: 'images/[hash][ext][query]',
        clean: true
    },
    devtool: 'inline-source-map',
    devServer: {
        static: './dist'
    },
    optimization: {
        runtimeChunk: 'single',
    },
    module: {
        rules: [
            {
                test: /\.less$/,
                use: [
                    // 'style-loader',
                    MiniCssExtractPlugin.loader,
                    {
                        loader: 'css-loader',
                        options: {
                            // url: false
                        }
                    },
                    'less-loader',
                    // {
                    //     loader: 'postcss-loader',
                    //     options: {
                    //         postcssOptions: {
                    //             plugins: [
                    //                 [
                    //                     "postcss-preset-env",
                    //                     {
                    //                         // Options
                    //                     },
                    //                 ],
                    //             ],
                    //         }
                    //     }
                    // }
                ]
            },
            {
                test: /\.css$/,
                use: [
                    // 'style-loader',
                    MiniCssExtractPlugin.loader,
                    {
                        loader: 'css-loader',
                        options: {
                            // url: false
                        }
                    },
                    /** 兼容性处理 postcss-》 postcss-loader postcss-preset-env 
                     * 帮助postcss找到packags.json中browerlist里面的配置，下载对应的兼容性
                     * "browserslist": {
                     *       // 开发环境 需要设置node js环境变量: process.env.NODE_ENV=development
                            "development": [
                                "last 1 chrome version"
                            ],
                            // 默认是生产环境
                            "production": [
                                ">0.2%",
                                "not dead"
                            ]
                        }
                    */
                    // 第一种 loader的默认配置
                    // 'postcss-loader'
                    // 第二种
                    // {
                    //     loader: 'postcss-loader',
                    //     options: {
                    //         postcssOptions: {
                    //             plugins: [
                    //                 [
                    //                     "postcss-preset-env",
                    //                     {
                    //                         // Options
                    //                     },
                    //                 ],
                    //             ],
                    //         }
                    //     }
                    // }
                ]
            },
            // {
            //     test:/\.(png|jpg|gif|jpeg|svg)$/,
            //     use:[
            //         {
            //             loader: "url-loader",
            //             options: {
            //                 name: "[name].[hash:5].[ext]",
            //                 limit: 1024 * 8, // size <= 1kib
            //                 outputPath: "./imgs"
            //             }
            //         }
            //     ]
            // },
            {
                test: /\.(jpg|png|jpeg|gif)/,
                type: 'asset/resource'
            },
            // webpack5 css-loader会自动处理 css中的url()？
            {
                test: /\.html$/, // 处理 img src 图片路径
                use: [
                    'html-loader'
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: '开发模式'
        }),
        new MiniCssExtractPlugin({
            filename: 'css/built.css'
        })
    ],
    mode: 'development' // 'production 模式
}

