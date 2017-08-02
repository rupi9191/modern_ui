var Path = require('path');
var webpack = require('webpack');
const config = {
    entry: {
        app: ['./js/app'],
    },
    output: {
        path: Path.join(__dirname,'./dist'),
        filename: '[name]-bundle.js'
    },
	 plugins: [
		new webpack.optimize.UglifyJsPlugin()
	],
    module: {}
}

module.exports = config;