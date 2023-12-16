import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "我的笔记",
  description: "学习记录",
  base: './',
  srcDir: 'src',
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      {
        text: 'front-end',
        items: [
          { text: 'html', link: '/front-end/html/简单归纳' },
          { text: 'css', link: '/front-end/css/css3的新特性' },
          { text: 'js', link: '/front-end/js/数据类型' }
        ]
      }
    ],

    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      }
    ],

    socialLinks: [
    ]
  }
})
