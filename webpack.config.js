var path = require('path');

module.exports = {
    entry: ['babel-polyfill', './react-app/main.js'],
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'public')
    },
    module: {
        loaders: [{
            loader: 'babel-loader',
            test: /\.jsx?$/,
            query: {
                plugins: ["transform-decorators-legacy"],
                presets: ['es2015', 'stage-0', 'react'],
            }
        }]
    }
};