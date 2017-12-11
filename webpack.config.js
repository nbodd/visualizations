// webpack.config.js
const webpack = require('webpack');
const path = require('path');

const config = {  
    context: path.resolve(__dirname, 'src', 'js'),
    entry: './index.js',
    output: {    
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'  },
        module: {    
            rules: [{      
                test: /\.js$/,
                include: path.resolve(__dirname, 'src'),
                use: [{        loader: 'babel-loader',
                    options: {
                        presets: [            
                            ['react']
                        ]        
                    }      
                }]
            }]
    }
}

module.exports = config
