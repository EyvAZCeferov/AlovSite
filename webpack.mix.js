const mix = require("laravel-mix");

// const WebpackShellPlugin = require("webpack-shell-plugin");

mix.js("resources/js/app.js", "public/js")
  .vue()
  .sass("resources/sass/app.scss", "public/css");
