const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");



module.exports = {
  mode: process.env.NODE_ENV,
  entry : './client/index.js',
  output : {
    path: path.resolve(__dirname, './dist'),
    publicPath: '/',
    filename: 'bundle.js',
  },
  
  module: {
    rules: [
      {
        test: /\.jsx?/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            // presets: [
            //   ['@babel/preset-env', { targets: "defaults" }],
            //   ['@babel/preset-react', { targets: "defaults" }]
            // ]
            presets: ['@babel/env', '@babel/react']
          }
        }
      },
      {
        // test: /\.s[ac]ss$/i, 
        test: /\.s?css/, 
        // test: /\.(css)$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'] // MiniCssExtractPlugin.loader to style-loader
      },
    ]
  },

  plugins: [
    new MiniCssExtractPlugin(),
    new HtmlWebpackPlugin({
      template: './client/assets/index.html',
    }),
  ],

  devtool: 'eval-source-map',
  
  devServer: {
    static: {
      // match the output path
      directory: path.resolve(__dirname, 'dist'),
      // match the output 'publicPath'
      publicPath: '/',
    },
    headers: { 'Access-Control-Allow-Origin': '*' },
    // historyApiFallback: true,
    /**
     * proxy is required in order to make api calls to
     * express server while using hot-reload webpack server
     * routes api fetch requests from localhost:8080/api/* (webpack dev server)
     * to localhost:3000/api/* (where our Express server is running)
     */
    proxy: {
      '/assets/**': {
        target: 'http://localhost:3000/',
        secure: false,
      },
      '/server/**': {
        target: 'http://localhost:3000/',
        secure: false,
      },
      // '/**': {
      //   target: 'http://localhost:3000/',
      //   secure: false,
      // },
    },
  },

  performance: {
    hints: false,
    maxEntrypointSize: 512000,
    maxAssetSize: 512000
},
  resolve: {
    // Enable importing JS / JSX files without specifying their extension
    extensions: ['.js', '.jsx'],
  },
};


































// const path = require("path");
// const HtmlWebpackPlugin = require('html-webpack-plugin');



// module.exports = {
//   mode: process.env.NODE_ENV,
//   entry : './client/index.js',
//   output : {
//     path: path.resolve(__dirname, './dist'),
//     publicPath: '/',
//     filename: 'bundle.js',
//   },
//   module: {
//     rules: [
//       {
//         // test: /\.s[ac]ss$/i, 
//         test: /\.s?css/, 
//         // test: /\.(css)$/,
//         use: ['style-loader', 'css-loader', 'sass-loader']
//       },
//       {
//         test: /\.jsx?/,
//         exclude: /node_modules/,
//         use: {
//           loader: 'babel-loader',
//           options: {
//             presets: [
//               ['@babel/preset-env', { targets: "defaults" }],
//               ['@babel/preset-react', { targets: "defaults" }]
//             ]
//           }
//         }
//       }
//     ]
//   },
//   // plugins: [
//   //   new HtmlWebpackPlugin ({
//   //     title: 'Development',
//   //     template: 'index.html'
//   //   }),
//   // ],
//   devServer: {
//     static: {
//       publicPath: '/build',
//     },
//     proxy: {
//       '/': 'http://localhost:3000'
//     }
//   }
// };