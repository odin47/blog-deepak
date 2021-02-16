module.exports = {
	webpack: function(config) {
	config.module.rules.push({
		test: /\.md$/,
		use: 'raw-loader',
	});
	config.node = {
		fs: 'empty'
	}
	return config
	},
	webpackDevMiddleware: (config) => {
		config.watchOptions = {
			poll: 1000,
			aggregateTimeout: 300
		};
		return config
	}
}