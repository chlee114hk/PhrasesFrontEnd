var gulp          = require('gulp');
var notify        = require('gulp-notify');
var source        = require('vinyl-source-stream');
var browserify    = require('browserify');
var babelify      = require('babelify');
var ngAnnotate    = require('browserify-ngannotate');
var browserSync   = require('browser-sync').create();
var rename        = require('gulp-rename');
var templateCache = require('gulp-angular-templatecache');
var uglify        = require('gulp-uglify');
var eslint        = require('gulp-eslint');
var webpack       = require('gulp-webpack');
var path          = require('path');
var merge         = require('merge-stream');

// Where our files are located
var jsFiles   = "src/js/**/*.js";
var viewFiles = "src/js/**/*.html";

var interceptErrors = function(error) {
  var args = Array.prototype.slice.call(arguments);

  // Send error to notification center with gulp-notify
  notify.onError({
    title: 'Compile Error',
    message: '<%= error.message %>'
  }).apply(this, args);

  // Keep gulp from hanging on this task
  this.emit('end');
};

var webpackConfig = {
    debug: true,
    watch: true,
    // the "entry" file of app. Angular "app.js" file.
    entry: "./src/js/app.js",     
    // this is the will-be-outputted file you'll reference in your index.html file
    output: {
        filename: "main.js",          
    },
    module: {
        loaders: [ 
          { 
            test: /.js$/,
            loader: 'babel-loader',
            include: path.join(__dirname, "js"),
            query: {
              presets: ['es2015']
            }     
          } 
        ]
    },
    resolve: {
        // this tells Webpack where actually to find lodash because you'll need it in the ProvidePlugin
        alias: {
            lodash: path.resolve( __dirname, './node_modules/lodash'),   
        }
    }
    //,
    // plugins: [
    //     // this tells Webpack to provide the "_" variable globally in all your app files as lodash.
    //     new webpack.ProvidePlugin({         
    //         _: "lodash",
    //     })
    // ]
};

// this tells gulp to take the app.js file and send it to Webpack along with the config and put the resulting files in ./build/
gulp.task("webpack", function() {
  return gulp.src('./src/js/app.js')
      .pipe(webpack(webpackConfig) )
      .on('error', function handleError() {
        this.emit('end'); // Recover from errors
      })
      .pipe(gulp.dest('./build/'))
});

gulp.task('browserify', ['views'], function() {
  return browserify('./src/js/app.js')
      .transform(babelify, {presets: ["es2015"]})
      .transform(ngAnnotate)
      .bundle()
      .on('error', interceptErrors)
      //Pass desired output filename to vinyl-source-stream
      .pipe(source('main.js'))
      // Start piping stream to tasks!
      .pipe(gulp.dest('./build/'));
});

gulp.task('lint', function() {
  //  ignores files with "node_modules" paths
  return gulp.src(['./src/js/**/*.js','!./node_modules/**'])
    .pipe(eslint({
      'rules':{
          'semi': [1, 'always']
      }
    }))
    .pipe(eslint.format())
    // Brick on failure to be super strict
    //.pipe(eslint.failOnError());
});

gulp.task('html', function() {
  return gulp.src(["src/index.html", "src/*.css", "src/*.json", "src/*.woff"])
      .on('error', interceptErrors)
      .pipe(gulp.dest('./build/'));
});

gulp.task('views', function() {
  return gulp.src(viewFiles)
      .pipe(templateCache({
        standalone: true
      }))
      .on('error', interceptErrors)
      .pipe(rename("app.templates.js"))
      .pipe(gulp.dest('./src/js/config/'));
});

// This task is used for building production ready
// minified JS/CSS files into the dist/ folder
gulp.task('build', ['html', 'browserify', 'lint'], function() {
  var html = gulp.src("build/index.html")
                 .pipe(gulp.dest('./dist/'));

  var js = gulp.src("build/main.js")
               .pipe(uglify())
               .pipe(gulp.dest('./dist/'));

  return merge(html,js);
});

gulp.task('default', ['html', 'browserify', 'lint'], function() {

  browserSync.init(['./build/**/**.**'], {
    server: "./build",
    port: 4000,
    notify: false,
    ui: {
      port: 4001
    }
  });

  gulp.watch("src/index.html", ['html']);
  gulp.watch(viewFiles, ['views']);
  gulp.watch(jsFiles, ['browserify']);
});