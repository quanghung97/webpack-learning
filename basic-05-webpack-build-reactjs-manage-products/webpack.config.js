const path = require('path')

module.exports = {
    entry: {
        bundle: './src/index.js'
    },
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                use: 'babel-loader',
                test: /\.js$/,
                exclude: '/node_modules/'
            },
            {
                use: [
                    'style-loader',
                    'css-loader'
                ],
                test: /\.css$/
            },
            {
                test: /\.(png|jpe?g|gif|svg|woff|woff2|eot|ttf|wav|mp3|ico)$/,
                use: [
                  {
                    loader: 'file-loader',
                    options: {},
                  },
                ],
            },
        ]
    }
}
