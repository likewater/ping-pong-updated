var browserify = require('browserify');
var source = require('vinyl-source-stream');
var gulp = require('gulp');
var concat = require('gulp-concat');

gulp.task('myTask', function(){
  console.log('hello gulp');
});

gulp.task('jsBrowserify', ['concatInterface'], function() {
  return browserify({ entries: ['./tmp/allConcat.js'] })
    .bundle()
    .pipe(source('app.js'))
    .pipe(gulp.dest('./build/js'));
});

gulp.task('concatInterface', function() {
  return gulp.src(['./js/*-interface.js'])
    .pipe(concat('allConcat.js'))
    .pipe(gulp.dest('./tmp'));
});

//[...]
//more dependencies will be added here.
