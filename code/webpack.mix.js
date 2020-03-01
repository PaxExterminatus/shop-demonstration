const mix = require('laravel-mix');

mix
    .js('resources/app.js', 'public/app')
    .sass('resources/sass/app.scss', 'public/app');
