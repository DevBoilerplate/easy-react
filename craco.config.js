const { whenDev } = require("@craco/craco")
// Craco插件
const FastRefreshCracoPlugin = require("craco-fast-refresh")
const CracoLessPlugin = require("craco-less")
// Webpack插件
const BundleAnalyzerPlugin = require("webpack-bundle-analyzer")
    .BundleAnalyzerPlugin
const WebpackBar = require("webpackbar")

module.exports = {
    reactScriptsVersion: "react-scripts",
    devServer: {
        port: 5000
    },
    webpack: {
        plugins: [
            new WebpackBar(),
            ...whenDev(
                () => [new BundleAnalyzerPlugin({ analyzerPort: 5001 })],
                []
            )
        ]
    },
    plugins: [
        {
            plugin: { CracoLessPlugin },
            options: {
                lessLoaderOptions: {
                    lessOptions: {
                        modifyVars: {
                            "@primary-color": "#1DA57A"
                        },
                        javascriptEnabled: true
                    }
                }
            }
        },
        {
            plugin: FastRefreshCracoPlugin
        }
    ]
}
