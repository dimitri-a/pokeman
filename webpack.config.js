const webpack = require('webpack')
const path = require('path')


//const ExtractTextPlugin = require('extract-text-webpack-plugin')
//const extractCSS = new ExtractTextPlugin('[name].bundle.css')

const config = {
    context: path.resolve(__dirname, 'app'),
    entry: {
        app: ["./app.jsx"]
    },
    output: {
        path: path.resolve(__dirname, "build"),
        publicPath: "/assets/",
        filename: "bundle.js"
    },
    module: {
        rules: [{
            test: /\.(png|jpg)$/,
            include: path.resolve(__dirname, 'src'),
            use: [{
                loader: 'url-loader',
                options: { limit: 10000 } // Convert images < 10k to base64 strings
            }]
        },
            {
                test: /\.css$/,
                use:['style-loader','css-loader','sass-loader']
            }
        , {
            test: /\.jsx?$/,
            include: [
                path.resolve(__dirname, "app")
            ],

            loader: "babel-loader",
            // the loader which should be applied, it'll be resolved relative to the context
            // -loader suffix is no longer optional in webpack2 for clarity reasons
            // see webpack 1 upgrade guide


            // options for the loader

        }]
    },
    plugins: [
        new webpack.NamedModulesPlugin()

    ]
}

module.exports = config
