const { defineConfig } = require('@vue/cli-service')
const AutoImport = require('unplugin-auto-import/webpack')
const Components = require('unplugin-vue-components/webpack')
const { ElementPlusResolver } = require('unplugin-vue-components/resolvers')
const webpack = require("webpack");
module.exports = defineConfig({
    runtimeCompiler: true,
    transpileDependencies: true,
    publicPath: "./",
    lintOnSave: false,
    configureWebpack: {
        resolve: {
            alias: {
                // src下的文件夹
                assets: "@/assets",
                components: "@/components",
                views: "@/views",
            },
        },
    },
    pluginOptions: {
        electronBuilder: {
            nodeIntegration: true,
            webSecurity: false,
            builderOptions: {  // 重点是这个
                productName: `中国农业之窗`,
                appId: 'com.orico',
                asar: true,
                linux: {
                    icon: './resources/favicon.ico'
                },
                mac: {
                    icon: './resources/favicon.ico'
                },
                win: {
                    icon: './resources/favicon.ico'
                },
                extraResources: {
                    // 拷贝静态文件到指定位置,否则打包之后出现找不到资源的问题.将整个resources目录拷贝到 发布的根目录下
                    from: './resources/',
                    to: './'
                },
                nsis: {
                    "oneClick":false,
                    "allowToChangeInstallationDirectory": true
                },
                  
            },
            customFileProtocol: "./"
        }
    },
    transpileDependencies: true,
    configureWebpack: {
        // ...
        plugins: [
            AutoImport({
                resolvers: [ElementPlusResolver()],
            }),
            Components({
                resolvers: [ElementPlusResolver()],
            }),
        ],
    },
    css: {
        loaderOptions: {
            less: {
                lessOptions: {
                    modifyVars: {
                        'primary-color': '#ec6800'
                    },
                    javascriptEnabled: true,
                },
            },
        },
    },
    devServer: {
        historyApiFallback: true
    }


})


