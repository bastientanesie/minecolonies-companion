module.exports = {
    publicPath: process.env.NODE_ENV === 'production'
        ? '//minecolonies-companion/'
        : '/',
    outputDir: 'dist',
    chainWebpack: config => {
        config
            .plugin('html')
            .tap(args => {
                args[0].title = require('./package.json').title;
                return args;
            })
    },
};
