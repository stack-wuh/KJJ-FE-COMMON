## KJJ-FE-COMMON!

我们现在写下了第一行公共组件库的代码!

将 Erp 项目中常用的公共组件集中抽离到当前 KJJ-FE-COMMON 项目中管理开发。

我们需要将原 Erp 项目中的公共模块的组件可以慢慢的移植到现在的项目当中。

我们需要集中管理的不单单是 WebComponents, 还有 Hooks 的集中, 现在只要你愿意共享自己的代码, 乐意贡献自己的代码, 可以在仓库中积极提交自己的代码.

### 如何使用

#### 1. Git

源码维护在 GitHub 的仓库, 可以直接下载源码至工程文档, 配置 webpack 的 alias 别名使用

```bash
pwd
# workspace/project/

git clone https://github.com/stack-wuh/usualCmWithHooks.git

```

#### 2.NPM

```bash
npm install kjj-fe-common --save
```

#### CDN

```javascript
<script src="https://unpkg.com/kjj-fe-common@1.1.0/dist/index.js"></script>
```

### 提前准备

1. React 组件化 (Class + Hooks)
2. React Hooks
3. React Hoc
4. React Render Props
5. Markdown
6. Webpack

### 文档类型是 Markdown

当前开发工具准备的文档类型是 markdown, 所以我们需要提前学习一些 markdown 相关的语法.

写 Markdown 文档的注意点可以浏览[写 Markdown 文档注意点]

### 如何写好一份文档?

1. 写提纲, 告诉开发, 你写的这一组件是什么?
2. 写例子, 告诉开发, 这个组件该怎么使用?
3. 分解组件的属性值, 告诉开发你的组件暴露了什么方法、属性可以由外部使用?

仔细参考 Antd 的组件文档, 或者是 Vue 的文档。

[写markdown文档注意点]: https://github.com/stack-wuh/Blog/issues/16
