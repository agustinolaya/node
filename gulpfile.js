var gulp = require('gulp');
var csso = require('gulp-csso');
var sass = require('gulp-sass');
var rename = require('gulp-rename');
// var pug = require('gulp-pug');

gulp.task('css', function(){
    return gulp.src('src/styles.scss')
        .pipe(sass())
        .pipe(csso())
        .pipe(rename('style.css'))
        .pipe(gulp.dest('public/stylesheets'));
});

gulp.task('js', function(){
    return gulp.src(['node_modules/materialize-css/dist/js/*.js','node_modules/jquery/dist/*'])
        .pipe(gulp.dest('public/javascripts'));
});

gulp.task('fonts', function(){
    return gulp.src('node_modules/materialize-css/dist/fonts/**/*')
        .pipe(gulp.dest('public/fonts'));
});

gulp.task('watch', function(){
    return gulp.watch('src/styles.scss', ['css']);
});
// gulp.task('pug', function(){
//     return gulp.src('src/index.pug')
//         .pipe(pug({
//             pretty: true
//         }))
//         .pipe(rename('index.html'))
//         .pipe(gulp.dest('public'));
// })

// var del = require('del');

// gulp.task('materialize', function(){
//     return gulp.src('node_modules/materialize-css/dist/**')
//         .pipe(gulp.dest('dist/assets/materialize'))        
// });

// gulp.task('html', function(){
//     return gulp.src('src/*.html')
//     .pipe(gulp.dest('dist'));
// });

// gulp.task('css', function(){
//     return gulp.src('src/*.css')
//     .pipe(gulp.dest('dist'));
// });

// gulp.task('js', function(){
//     return gulp.src('src/*.js')
//     .pipe(gulp.dest('dist'));
// });

// gulp.task('clean', function(){
//     return del(['dist/*.html', 'dist/*.js', 'dist/*.css']);
// });

// gulp.task('inicializar', ['clean', 'html', 'css', 'js', 'materialize']);

gulp.task('default', ['css','js','fonts','watch']);