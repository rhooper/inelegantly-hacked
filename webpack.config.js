// const path = require('path');
// const webpack = require('webpack');
//
// module.exports = {
//     entry: ["./src/js/*.js"],
//     output: {
//         path: __dirname + "/static/js",
//         filename: 'intrinsic.js'
//     },
//     devtool: "sourcemap",
//     externals: {
//         "jquery": "jQuery"
//     },
//     module: {
//       rules: [
//         {
//           test: /\.js$/,
//           exclude: /node_modules\/(?!bullets-js)/,
//           use: {
//             loader: 'babel-loader',
//             options: {
//               presets: ['babel-preset-env']
//             }
//           }
//         }
//       ]
//     }
// }