const mix = require('laravel-mix');

mix.sass('resources/css/app.scss', 'public/css') // Se você estiver usando Sass
    .postCss('resources/css/styles.css', 'public/css') // Se você estiver usando CSS puro
