var Encore = require('@symfony/webpack-encore');

Encore
    .setOutputPath('.')
    .setPublicPath('/')
    .addEntry('app', [
        './test.css',
    ])
;

module.exports = Encore.getWebpackConfig();
