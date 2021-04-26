module.exports = {
    pages: {
        index: {
            entry: "./src/main.js",
            // 模板来源
            template: 'public/index.html',
            filename: "index.html",
            title: 'webchat login'
        }
    },
    devServer: {
        host: '192.168.4.179',
        port: '9000',
        // proxy: {
        //     '/': {
        //         target: 'http://192.168.4.179/index.html'
        // //            target:'http://192.168.4.179:9001/api',
        //     },
        // }
    },

}