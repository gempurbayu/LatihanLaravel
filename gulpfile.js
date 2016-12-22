<<<<<<< HEAD
const elixir = require('laravel-elixir');

require('laravel-elixir-vue-2');
=======
var elixir = require('laravel-elixir');
>>>>>>> origin/master

/*
 |--------------------------------------------------------------------------
 | Elixir Asset Management
 |--------------------------------------------------------------------------
 |
 | Elixir provides a clean, fluent API for defining some basic Gulp tasks
<<<<<<< HEAD
 | for your Laravel application. By default, we are compiling the Sass
=======
 | for your Laravel application. By default, we are compiling the Less
>>>>>>> origin/master
 | file for our application, as well as publishing vendor resources.
 |
 */

<<<<<<< HEAD
elixir(mix => {
    mix.sass('app.scss')
       .webpack('app.js');
=======
elixir(function(mix) {
    mix.less('app.less');
>>>>>>> origin/master
});
