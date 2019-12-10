"use strict";

const path = require("path");
const NODE_ENV = process.env.NODE_ENV || "development";
const webpack = require("webpack");

module.exports = {
    // mode: "development",
    entry: {
        main: "./js/es6/main.js",
    },
    output: {
        filename: "[name].js", 
        path: path.resolve(__dirname, "/dist"),
        publicPath: "/dist"
    },

    devServer: {
        overlay: true
    },

    watch: NODE_ENV == "development",

    watchOptions: {
        aggregateTimeout: 100
    },

    devtool: NODE_ENV == "development" ? "source-map" : null,

    plugins: [
        new webpack.DefinePlugin({
            NODE_ENV: JSON.stringify(NODE_ENV),
            LANG: JSON.stringify("ru")
        })
    ],

    module: {
        rules: [{
            test: /\.js$/, 
            exclude: "/node_modules",
            use: {
                loader: "babel-loader",
                options: {
                    presets: ["@babel/preset-env"]
                }
            }
        }]
    }
};