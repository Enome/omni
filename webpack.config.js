module.exports = {

  watch: true,

  entry: './index.js',
  output: { filename: 'output.js' },

  module: {

    loaders: [
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader' },
    ],

  },

};
