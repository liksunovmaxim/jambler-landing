var gulp           = require('gulp'),
	browserSync    = require('browser-sync').create(),
	mainBowerFiles = require('gulp-main-bower-files'),
	logger         = require('gulp-logger'),
	flatten        = require('gulp-flatten'),
	cleanCSS       = require('gulp-clean-css'),
	sourcemaps     = require('gulp-sourcemaps'),
	autoprefixer   = require('gulp-autoprefixer'),
	cmq            = require('gulp-merge-media-queries'),
	sass           = require('gulp-sass');

gulp.task('serve', ['sass'], function() {

	browserSync.init({
		proxy: "jambler.web/"
	});

	gulp.watch("./frontend/stylesheets/**/*.scss", ['sass']);
	gulp.watch("./public/**/*.html", ['html']);
	gulp.watch("./frontend/javascripts/**/*.js", ['js:build']);

});

gulp.task('mainfiles', ['js:build'], function() {
	return gulp.src('./bower.json')
		.pipe(mainBowerFiles())
		.pipe(gulp.dest('./frontend/javascripts'));
});

gulp.task('sass', function() {
	return gulp.src("./frontend/stylesheets/styles.scss")
		.pipe(sourcemaps.init())
		.pipe(sass().on('error', sass.logError))
		.pipe(autoprefixer({
			browsers: [
				"last 2 version",
				"ie 10",
				"ios 6",
				"android 4"
			]
		}))
		.pipe(cmq({log: true}))
		.pipe(sourcemaps.write())
		.pipe(gulp.dest("./public/css" ))
		.pipe(browserSync.stream());
});

gulp.task('html', function() {
	return gulp.src("./public/**/*.html")
		.pipe(browserSync.stream());
});

gulp.task('js:build', function() {
	return gulp.src("./frontend/javascripts/**/*.js")
		.pipe(flatten())
		.pipe(logger({}))
		.pipe(gulp.dest("./public/js" ))
});

gulp.task('default', ['mainfiles', 'serve']);