const { resolve } = require('path');

module.exports = {
    entry: 'index.js',

    output: {
        filename: 'built.js',
        // 当前文件的目录绝对路径
        path: resolve(__dirname, 'build')
    },
    module: {
        rules: [

        ]
    },
    plugins: [

    ],
    mode: 'development' // 'production
}