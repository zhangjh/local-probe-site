import { defineConfig } from 'vitepress'

export default defineConfig({
  lang: 'zh-CN',
  title: 'Local Probe 线索雷达',
  description: '本地运行的社媒监控工具，持续扫描目标平台公开内容，将结果推送到微信',

  themeConfig: {
    nav: [
      { text: '首页', link: '/' },
      { text: '快速开始', link: '/guide/getting-started' },
      { text: '产品文档', link: '/product/prd' },
      { text: '技术文档', link: '/dev/architecture' },
    ],

    sidebar: {
      '/guide/': [
        {
          text: '使用指南',
          items: [
            { text: '快速开始', link: '/guide/getting-started' },
            { text: '安装', link: '/guide/install' },
            { text: 'AI 配置', link: '/guide/ai-config' },
            { text: '通知渠道', link: '/guide/notification' },
            { text: '常见问题', link: '/guide/faq' },
          ],
        },
      ],
      '/product/': [
        {
          text: '产品文档',
          items: [
            { text: '产品需求文档', link: '/product/prd' },
            { text: '分发与增长策略', link: '/product/marketing' },
            { text: '开发任务拆解', link: '/product/tasks' },
          ],
        },
      ],
      '/dev/': [
        {
          text: '技术文档',
          items: [
            { text: '架构设计', link: '/dev/architecture' },
            { text: '项目结构', link: '/dev/project-structure' },
            { text: '开发指南', link: '/dev/contributing' },
          ],
        },
      ],
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/zhangjh' },
    ],

    footer: {
      message: 'Local Probe · 线索雷达 — 帮你盯着小红书',
      copyright: '© 2026 Local Probe. All rights reserved.',
    },

    search: {
      provider: 'local',
    },

    outline: {
      label: '页面导航',
    },

    docFooter: {
      prev: '上一页',
      next: '下一页',
    },
  },
})
