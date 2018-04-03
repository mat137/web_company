var gulp = require('gulp');
var sass = require('gulp-ruby-sass');
var sourcemaps = require('gulp-sourcemaps');

gulp.task('sass', function(){
// console.log("hejS");
  return sass('scss/**/*.scss', {style: 'expanded', sourcemap:true})
  .on('error', sass.logError)
  .pipe(sourcemaps.init())
  .pipe(sourcemaps.write())
  .pipe(gulp.dest('css'));

});

gulp.task('watch', function(){
  gulp.watch('scss/**/*.scss', ['sass']);
})