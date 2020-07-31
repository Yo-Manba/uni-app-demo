module.exports = {
    devServer: {
        // #ifdef H5
        proxy: {
            '/api': {
                target: 'https://qym.jjyapp.com',
                pathRewrite: {
                    '^/api': ''
                }
            }
        },
        // #endif
    }
}
