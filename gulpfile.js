var browserify = require('browserify');
var source = require('vinyl-source-stream');
var gulp = require('gulp');

gulp.task('myTask', function(){
  console.log('hello gulp');
});

gulp.task('jsBrowserify', function() {
  return browserify({ entries: ['./js/scripts-interface.js'] })
    .bundle()
    .pipe(source('app.js'))
    .pipe(gulp.dest('./build/js'));
});

//[...]
//more dependencies will be added here.
