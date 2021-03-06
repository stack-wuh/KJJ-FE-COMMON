import { defineConfig } from 'dumi';

export default defineConfig({
  title: 'KJJ-FE-COMMON',
  favicon:
    'https://user-images.githubusercontent.com/9554297/83762004-a0761b00-a6a9-11ea-83b4-9c8ff721d4b8.png',
  // logo: 'https://user-images.githubusercontent.com/9554297/83762004-a0761b00-a6a9-11ea-83b4-9c8ff721d4b8.png',
  outputPath: 'docs-dist',
  navs: [
    {
      title: 'github',
      path: 'https://github.com/stack-wuh',
    },
  ],
  description: '更简单, 更快速!',
  base: '/doc-common/',
  publicPath: '/doc-common/',
  exportStatic: {},
  // more config: https://d.umijs.org/config
});
