const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");



module.exports = {
  entry : './client/index.js',
  output : {
    path: path.resolve(__dirname, './build'),
    filename: 'bundle.js',
    publicPath: '/',
  },
  mode: process.env.NODE_ENV,
  devServer: {
    historyApiFallback: true,
    static: {
      // match the output path
      directory: path.resolve(__dirname, 'build'),
      // match the output 'publicPath'
      publicPath: '/build',
    },
    headers: { 'Access-Control-Allow-Origin': '*' },
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
    },
  },
  module: {
    rules: [
      {
        test: /\.jsx?/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              ['@babel/preset-env', { targets: "defaults" }],
              ['@babel/preset-react', { targets: "defaults" }]
            ]
          }
        }
      },
      {
        test: /\.s?css/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      },
    ]
  },
  plugins: [
    new HtmlWebpackPlugin ({
      title: 'Development',
      template: './index.html'
    }),
  ],
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