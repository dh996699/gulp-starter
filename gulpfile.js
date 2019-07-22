const gulp = require("gulp"); // Load Gulp!
// Now that we've installed the terser package we can require it:
const terser = require("gulp-terser"),
  rename = require("gulp-rename");
  gulp.task("watch", function() {
    gulp.watch("js/*.js", gulp.series("scripts"));
  });
  const browserSync = require('browser-sync').create();

  // Static server
  gulp.task('browser-sync', function() {
      browserSync.init({
          server: {
              baseDir: "./"
          }
      });
  });
  
  // or...
  
  gulp.task('browser-sync', function() {
      browserSync.init({
          proxy: "yourlocal.dev"
      });
  });

gulp.task("default", function() {
  return gulp
    .src("./js/*.js") // What files do we want gulp to consume?
    .pipe(terser()) // Call the terser function on these files
    .pipe(rename({ extname: ".min.js" })) // Rename the uglified file
    .pipe(gulp.dest("./build/js")); // Where do we put the result?
});