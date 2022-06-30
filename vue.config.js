module.exports = {
    configureWebpack: {
        module: {
            rules: [
                {
                    type: 'javascript/auto',
                    test: /\.mjs$/,
                    use: ['css-loader', 'postcss-loader', 'resolve-url-loader', 'sass-loader'],
                },
                {
                    test: /\.s(a|c)ss$/,
                    use: ['style-loader', 'sass-loader', 'css-loader']
                },
            ]
        }
    },
    css: {
        requireModuleExtension: false,
        loaderOptions: {
         css: {
          modules: {
           localIdentName: '[hash:6]'
          }
         },
        sass: {
            sassOptions: {
                includePaths: [
                    './node_modules'
                ]
            }
        }
        }
       }

}
