const HtmlWebPackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require("path");
//let FaviconsWebpackPlugin = require("favicons-webpack-plugin");

module.exports = {
    module: {
        rules:[
            {
                test: /\.(png|jpg|svg|pdf)$/,
                loader: 'file-loader',
                include: path.join(__dirname, 'src')
            },
            {
                test: /\.scss$/,
                use: [
                    "style-loader",         /*IN THIS PARTICULAR ORDER*/
                    "css-loader",
                    "sass-loader"
                ]
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.html$/,
                use: [
                    {
                        loader: "html-loader",
                        options: { minimize: true}
                    }
                ]
            }
        ]
    },
    resolve: {
        alias: {
            'images': path.resolve(__dirname, './src/images')
        }
    },
    plugins:[
        new HtmlWebPackPlugin({
            template: "./src/index.html",   //  location of index file
            filename: "./index.html"        //  defines output
        }),
        new MiniCssExtractPlugin({
            filename:"[name].css",
            chunkFilename: "[id].css"
        }),
        //new FaviconsWebpackPlugin(path.resolve(__dirname, './src/tagboyfav.png'))
    ]
}