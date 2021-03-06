const path = require('path');

const env = process.env.NODE_ENV

module.exports = {
  mode: env || 'development',
  entry: './src/index.js',

  output: {
    // options related to how webpack emits results
    path: path.resolve(__dirname, "dist"), // string
    // the target directory for all output files
    // must be an absolute path (use the Node.js path module)
    filename: "main.min.js", // string    // the filename template for entry chunks
    publicPath: "/assets/", // string    // the url to the output directory resolved relative to the HTML page
    library: "hzob-validation", // string,
    // the name of the exported library
    libraryTarget: "commonjs", // universal module definition    // the type of the exported library
    /* Advanced output configuration (click to show) */
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"]
          }
        }
      }
    ]
  },

  resolve: {
    // options for resolving module requests
    // (does not apply to resolving to loaders)
    modules: [
      "node_modules",
      path.resolve(__dirname, "src")
    ],
  },
};