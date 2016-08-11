var path = require('path');

var dirs = {
	build: './build',
	tmp: './.tmp',
	src: './src',
	dist: './dist'
};

var paths = {
	src: {
		img: dirs.src + '/img',
		htdocs: dirs.src + '/htdocs',
		js: dirs.src + '/js',
		assets: dirs.src + '/assets',
		css: dirs.src + '/css'
	},
	tmp: {
		css: dirs.tmp + '/css',
		img: dirs.tmp + '/img',
		js: dirs.tmp + '/js',
		assets: dirs.tmp + '/assets'
	},
	build: {
		css: dirs.build + '/css',
		img: dirs.build + '/img',
		js: dirs.build + '/js',
		assets: dirs.build + '/assest',
		css: dirs.build + '/css'
	},
	dist: {
		css: dirs.dist + '/css'
	}
};

var server = {
	port: '8080',
	root: path.resolve('./')
};

module.exports = {
	dirs: dirs,
	paths: paths,
	server: server
};