var gulp        = require( 'gulp' );
var concat      = require( 'gulp-concat' );
var stylus      = require('gulp-stylus');
var size        = require( 'gulp-size' );
var jshint      = require( 'gulp-jshint' );
var notify      = require( 'gulp-notify' );
var uglify      = require( 'gulp-uglify' );
var csso        = require( 'gulp-csso' );

var catchError = function(err) {
    console.log(err.toString())
    this.emit('end')
}

/**
* Styl task
**/
gulp.task('styl', function () {

    gulp.src('./src/css/style.styl')
        .pipe(stylus())
        .on('error', catchError)
        .pipe( concat( 'iziToast.css' ) )
        .pipe( gulp.dest( './dist/css' ) )
        .pipe( concat( 'iziToast.min.css' ) )
        .pipe( csso({discardComments: false}) )
        .pipe( gulp.dest( './dist/css' ) )
        .pipe( notify( 'Stylus build done successfully!' ) )
        .pipe( size({ showFiles: true }) );
});

/**
* Scripts task
**/
gulp.task( 'scripts', function() {
    return gulp.src( './src/js/iziToast.js' )
        .pipe( jshint() )
        .pipe( jshint.reporter('default') )
        .pipe( concat( 'iziToast.min.js' ) )
        .pipe( uglify( { mangle: true } ) )
        .pipe( gulp.dest( './dist/js' ) )
        .pipe( notify( 'Scripts build done successfully!' ) )
        .pipe( size({ showFiles: true }) );
});

/**
* Watch task
**/

gulp.task('watch', ['styl','scripts'], function() {

    gulp.watch('./src/css/**/*.styl', [ 'styl' ])    // watch for changes and run the css task
    gulp.watch('./src/js/**/*.js', [ 'scripts' ])    // watch for changes and run the js task
})

/**
* Default task
**/
gulp.task( 'default', [ 'styl', 'scripts' ] );

