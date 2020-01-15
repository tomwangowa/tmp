// webpack.config.js
const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');

let buildSettings = {
    debug: true
};

module.exports = {
    mode: buildSettings.debug===true ? 'development' : 'production',
    entry: ['./src/contentScript.js'], // 在 index 檔案後的 .js 副檔名是可選的
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'contentScript.bundle.js'
    },
    plugins: [
        new CopyPlugin([
            { from: './src', to: './' },
            { from: './_locales', to: './_locales' },
            { from: './images', to: './images' }
        ]),
    ]
};

