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
    module: {
        loaders: [
            {
                test: /\.js$/,
                include: [
                    Path.resolve(process.cwd(), 'client/js')
                ],
                exclude: 'node_modules',
                loader: 'babel',
                query: {
                    presets: ['es2015']
                }
        }]

    }
}

module.exports = config;