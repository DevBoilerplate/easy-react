# easy-react

基于create-react-app、typescript、less等结合实际使用的模板仓库

## Features

- [x] `craco`支持`webpack`配置的更改
- [x] `yarn`作为包管理工具
- [x] `yarn autoclean`支持依赖的杂项自动清理
- [x] `.editorconfig`支持对编辑器进行约束
- [x] `eslint`代码质量约束
- [x] `prettier`代码风格约束
- [x] 支持`typescript`
- [x] 支持`husky`工作流控制
- [x] 支持`react-router-dom`
- [x] 支持热更新
- [x] `webpack-bundle-analyzer`支持打包大小分析
- [x] 支持`less`

## Attentions

- 关于开启cssModules的问题（默认不开启cssModules）

> 【less和cssModules在`url(...)`语句计算相对路径位置的问题[issue解释](https://github.com/webpack-contrib/less-loader/issues/109#issuecomment-253797335)】

开启cssModules的配置

```js
// craco.config.js配置文件

const CracoLessPlugin = require("craco-less")

module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        cssLoaderOptions: {
          modules: { localIdentName: "[local]_[hash:base64:5]" }
        }
      }
    }
  ]
}
```

## bugs

- craco对CRA4.x的eslint报错问题 [#205](https://github.com/gsoft-inc/craco/issues/205)

## References

- [craco](https://github.com/gsoft-inc/craco)
- [EditorConfig](https://editorconfig.org)
- [prettier](https://prettier.io)
