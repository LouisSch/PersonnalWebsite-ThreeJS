const path = require('path');

module.exports = {
    entry: './public/resources/scripts/Kernel.ts',
    mode: 'development',
    output: {
        path: path.resolve(__dirname, 'public/resources/dist/scripts'),
        filename: 'Kernel.bundle.js'
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js']
    },
    module: {
        rules: [{
            test: /\.ts$/,
            use: 'ts-loader'
        }]
    }
}