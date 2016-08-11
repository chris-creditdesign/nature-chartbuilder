// Node modules 
var browserSync = require("browser-sync");
var buffer = require("vinyl-buffer");
var del = require("del");
var nib = require("nib");
var reload = browserSync.reload;
var source = require("vinyl-source-stream");

// browserify
var browserify = require("browserify");
var envify = require("envify/custom");
var reactify = require("reactify");

// Gulp plugins
var base64 = require("gulp-css-base64");
var changed = require("gulp-changed");
var gulp = require("gulp");
var uglify = require("gulp-uglify");

// Local modules 
var config = require("./gulp/config");
var gutil = require("gulp-util");

gulp.task("browserify:dev", function () {
	var bundler = browserify(config.paths.src.js + "/index.js", {
		debug: true
	})
	.transform(envify({ NODE_ENV: "dev"}));

	return bundler.bundle()
		.pipe(source("main.js"))
		.pipe(gulp.dest(config.paths.build.js))
		.pipe(reload({ stream:true }));
});

gulp.task("clean", function (done) {
	del([
		config.dirs.tmp + "/**",
		config.dirs.build + "/**"
	]).then(function(paths) {
		done();
	});
}); // working

gulp.task("copy-htdocs", function () {
	return gulp.src(config.paths.src.htdocs + "/**")
		.pipe(changed(config.dirs.build))
		.pipe(gulp.dest(config.dirs.build))
		.pipe(reload({ stream: true }));
}); // Working

gulp.task("copy-css", function() {
	return gulp.src(config.paths.src.css + "/**")
		.pipe(changed(config.paths.build.css))
		.pipe(gulp.dest(config.paths.build.css))
		.pipe(reload({ stream: true }));
}); // Copy Css

gulp.task("copy-assets", function() {
	return gulp.src(config.paths.src.assets + "/**")
		.pipe(changed(config.paths.build.assets))
		.pipe(gulp.dest(config.paths.build.assets))
		.pipe(reload({ stream: true }));
}); // Working

gulp.task("browser-sync", ["watch"], function () {
	browserSync({
		server: { baseDir: "build" },
		open: false
	});
}); 

// Serve files, watch for changes and update
gulp.task("watch", ["browserify:dev", "copy-htdocs", "copy-css", "copy-assets"], function (done) {
	gulp.watch(config.paths.src.js + "/**", ["browserify:dev"]);
	gulp.watch(config.paths.src.htdocs + "/**", ["copy-htdocs"]);
	gulp.watch("./node_modules/d3/d3.js", ["browserify:dev"]);
	done();
});

gulp.task("default", ["clean"], function () {
	gulp.start("browser-sync");
});



































