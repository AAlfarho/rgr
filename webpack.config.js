module.exports = {
    entry: "./js/app.js",
    output: {
        path: __dirname + "/public",
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: { 
                    presets: ['react','es2015', 'stage-0'],
                    plugins: [__dirname + '/babelRelayPlugin']
                    
                }
            },
            { 
                test: /\.css$/, 
                loader: "style-loader!css-loader" 
              },
              { 
                test: /\.png$/, 
                loader: "url-loader?limit=100000" 
              },
              { 
                test: /\.jpg$/, 
                loader: "file-loader" 
              },
              {
                test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/, 
                loader: 'url?limit=10000&mimetype=application/font-woff'
              },
              {
                test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, 
                loader: 'url?limit=10000&mimetype=application/octet-stream'
              },
              {
                test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, 
                loader: 'file'
              },
              {
                test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, 
                loader: 'url?limit=10000&mimetype=image/svg+xml'
              }
            ]
    }
}

