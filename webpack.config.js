var webpack = require('webpack'),
    plugins = [];

if (process.env.COMPRESS) {
    plugins.push(
        new webpack.optimize.UglifyJsPlugin({
            compressor: {
                warnings: false
            }
        })
    );
}

module.exports = {
    entry: {
       "dist/react-chartjs": "./index.js",
       "demo/demo": "./demo.js"
    },
    output: {
        filename: process.env.COMPRESS ? '[name].min.js' : '[name].js',
        chunkFilename: '[id].js'
    },

    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel-loader'
            }
        ]
    },

    externals: [
        {
            'react/addons': 'React',
            'react': 'React',
            'chart.js': 'Chart.js',
            'Chartjs': 'Chart.js'
        }
    ],
    node: {
        Buffer: false
    },

    plugins: plugins

};
