const Encore = require('@symfony/webpack-encore');

Encore
    // directory where compiled assets will be stored
    .setOutputPath('public/build/')
    // public path used by the web server to access the output path
    .setPublicPath('/build')
    // only needed for CDN's or sub-directory deploy
    //.setManifestKeyPrefix('build/')

    /*
     * ENTRY CONFIG
     *
     * Add 1 entry for each "page" of your app
     * (including one that's included on every page - e.g. "app")
     *
     * Each entry will result in one JavaScript file (e.g. app.js)
     * and one CSS file (e.g. app.css) if you JavaScript imports CSS.
     */
    .addEntry('app', './assets/js/app.js')
    .addEntry('jquery','./assets/js/jquery3.js')
    .addEntry('about-l-bg','./assets/img/about-l-bg.png')
    .addEntry('about-r-bg','./assets/img/about-r-bg.png')
    .addEntry('banner-r','./assets/img/banner-r.png')
    .addEntry('history-bg','./assets/img/hourglass.png')
    .addEntry('tid_logo','./assets/img/tid_logo.png')
    .addEntry('logo','./assets/img/advitrust-logo.png')
    .addEntry('logo_2','./assets/img/logo.png')
    .addEntry('logo1','./assets/img/logo_1.png')
    .addEntry('info','./assets/img/info.png')
    .addEntry('fav','./assets/img/fav.png')
    .addEntry('tfm','./assets/img/tfm.png')
    .addEntry('aro','./assets/img/aro.png')
    .addEntry('of','./assets/img/of.png')
    .addEntry('ck','./assets/img/check.png')
    .addEntry('ac','./assets/img/ac.png')
    .addEntry('p-bg','./assets/img/partners-bg.png')
    .addEntry('stc','./assets/img/stc.png')
    .addEntry('font_linear_woff2','./assets/fonts/Linearicons-Free.woff2')
    .addEntry('font_linear_eot','./assets/fonts/Linearicons-Free.eot')
    .addEntry('font_linear_ttf','./assets/fonts/Linearicons-Free.ttf')
    .addEntry('font_linear_woff','./assets/fonts/Linearicons-Free.woff')
    .addEntry('font_linear_svg','./assets/fonts/Linearicons-Free.svg')
    .addEntry('fontawesome-webfont_woff2','./assets/fonts/fontawesome-webfont.woff2')
    .addEntry('fontawesome-webfont_eot','./assets/fonts/fontawesome-webfont.eot')
    .addEntry('fontawesome-webfont_ttf','./assets/fonts/fontawesome-webfont.ttf')
    .addEntry('fontawesome-webfont_woff','./assets/fonts/fontawesome-webfont.woff')
    .addEntry('fontawesome-webfont_svg','./assets/fonts/fontawesome-webfont.svg')
    .addEntry('FontAwesome-oft','./assets/fonts/FontAwesome.otf')
    .addEntry('montserrat_black','./assets/fonts/Montserrat-Black.ttf')
    .addEntry('montserrat_bold','./assets/fonts/Montserrat-Bold.ttf')
    .addEntry('montserrat_light','./assets/fonts/Montserrat-Light.ttf')
    //.addEntry('page2', './assets/js/page2.js')

    // When enabled, Webpack "splits" your files into smaller pieces for greater optimization.
    .splitEntryChunks()

    // will require an extra script tag for runtime.js
    // but, you probably want this, unless you're building a single-page app
    .enableSingleRuntimeChunk()

    /*
     * FEATURE CONFIG
     *
     * Enable & configure other features below. For a full
     * list of features, see:
     * https://symfony.com/doc/current/frontend.html#adding-more-features
     */
    .cleanupOutputBeforeBuild()
    .enableBuildNotifications()
    .enableSourceMaps(!Encore.isProduction())
    // enables hashed filenames (e.g. app.abc123.css)
    .enableVersioning(Encore.isProduction())

    // enables @babel/preset-env polyfills
    .configureBabel(() => {}, {
        useBuiltIns: 'usage',
        corejs: 3
    })
    .autoProvideVariables({
        $: 'jquery',
        jQuery: 'jquery',
        'window.jQuery': 'jquery',
    })
    // enables Sass/SCSS support
    //.enableSassLoader()

    // uncomment if you use TypeScript
    //.enableTypeScriptLoader()

    // uncomment to get integrity="..." attributes on your script & link tags
    // requires WebpackEncoreBundle 1.4 or higher
    //.enableIntegrityHashes()

    // uncomment if you're having problems with a jQuery plugin
    //.autoProvidejQuery()

    // uncomment if you use API Platform Admin (composer req api-admin)
    //.enableReactPreset()
    //.addEntry('admin', './assets/js/app.js')
;

module.exports = Encore.getWebpackConfig();
