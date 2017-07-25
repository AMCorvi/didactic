const gulp = require("gulp");
const nodemon = require("gulp-nodemon");
const babel = require("gulp-babel");


gulp.task("transpile", function () {
    gulp.src("./src/*.js")
        .pipe(babel({
            "presets": ["env"],
            "plugins": ["syntax-dynamic-import"]
        }))
        .pipe(gulp.dest("./lib"));
});


// When "lib/app.js" is updated restart
//      nodemon using "lib/app.js" script
gulp.task("start", function () {
    nodemon({
        script: "./lib/app.js"
        , ext: "js"
    });
});


// Set watch to transpile on "src/app.js" saves
gulp.task("watch", function() {
    gulp.watch("./src/app.js", ["transpile"]);
});

gulp.task("default", ["watch", "start"])
