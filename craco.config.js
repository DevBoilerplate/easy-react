const { whenDev } = require("@craco/craco")
const FastRefreshCracoPlugin = require("craco-fast-refresh")
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
            plugin: { FastRefreshCracoPlugin },
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
        }
    ]
}
