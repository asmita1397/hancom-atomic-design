module.exports = {
    chainWebpack: (config) => {
        config.module
            .rule('storysource')
            .test(/\.stories\.js?$/)
            .post()
            .use('storysource')
            .loader(require.resolve('@storybook/addon-storysource/loader'))
    },
    lintOnSave: false,
     devServer: {
        port: 9000
    }

}