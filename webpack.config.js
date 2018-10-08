var path = require('path');
 
module.exports = {
  entry: './Todolist/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  devtool: 'cheap-module-eval-source-map'
};