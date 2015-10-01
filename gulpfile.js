var gulp = require( "gulp" );
var jasmine = require( "gulp-jasmine" );

gulp.task( "test", function () {
  return gulp.src( [ "index.js", "test/*-spec.js" ] )
    .pipe(
      jasmine( {
        includeStackTrace: true,
        verbose: true
      }
    )
  );
} );

gulp.task( "default", [ "test" ] );
