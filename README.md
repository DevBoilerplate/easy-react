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
- [ ] 支持`less`
- [x] 支持`react-router-dom`
- [x] 支持热更新
- [x] `webpack-bundle-analyzer`支持打包大小分析

## bugs

- React17 JSX转化导致tsconfig报错问题
- craco对CRA4.x的eslint报错问题 [#205](https://github.com/gsoft-inc/craco/issues/205)
- craco-less加载失败

## 规范化流程

- eslint规范ts
- eslint规范react
- prettier和eslint规范代码
- vscode eslint
- husky和lint-staged工作流

## References

- [craco](https://github.com/gsoft-inc/craco)
- [EditorConfig](https://editorconfig.org)
- [prettier](https://prettier.io)
