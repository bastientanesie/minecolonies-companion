module.exports = {
    publicPath: process.env.NODE_ENV === 'production'
        ? '//minecolonies-companion/'
        : '/',
    outputDir: 'dist',
};
