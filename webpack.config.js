var path = require('path');
var babelRelayPlugin = path.join(__dirname, 'src/main/js/babelRelayPlugin');

module.exports = {
	entry: {
		index: ['./src/main/js/index.js']
	},
	output: {
		path: './grails-app/assets/javascripts',
		publicPath: '/assets/',
		filename: 'wp-bundle.js'
	},
	module: {
		loaders: [
			{
				test: /\.js$/,
				include: path.join(__dirname, 'src/main/js'),
				loader: 'babel-loader',
				query: {
					plugins: [babelRelayPlugin],
					presets: ['react', 'es2015', 'stage-0']
				}
			}
		]
	}
};
