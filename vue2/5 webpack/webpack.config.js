const path=require('path')

module.exports={
    entry:'./1.js',
    output:{
        path:path.resolve(__dirname,'dist'),
        filename:'my-first-webpack.bundle.js'
    },
    module:{
        rules:[
            {test:/\.css$/,use:'style-loader!css-loader'}
            {test:/\.ts$/,use:'ts-loader'}
        ]
    }
};