/**
 * Created by whobird on 2018/3/13.
 */
const path=require("path");
var ExtractTextPlugin = require('extract-text-webpack-plugin');

const config = {
    entry: {
        main:"./src/index.js",
        css:"./src/css.js",
        commonCss:"./src/commonCss.js"
    },

    output:{
        filename:'[name].js',
        path:path.resolve(__dirname,'dist')
    },

    devServer:{
        contentBase:'./dist'
    },
    module:{
        rules:[
            {
                test:/\.css$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: [
                        'css-loader',
                    ]
                    })
            },
            {
                test:/\.(png|svg|jpg|gif)$/,
                use:[
                    'file-loader'
                ]
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use: [
                    'file-loader?b name=[path][name].[ext]&outputPath=img/&publicPath=./\','
                    ]
            }
        ]
    },

    plugins: [
        new ExtractTextPlugin('[name].css')
    ]
};

module.exports = config;

