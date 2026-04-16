import { defineConfig } from 'vitepress'

export default defineConfig({
  lang: 'zh-CN',
  title: 'Local Probe 线索雷达',
  description: '本地运行的社媒监控工具，持续扫描目标平台公开内容，将结果推送到微信',

  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    ['link', { rel: 'icon', type: 'image/png', href: '/icon.png' }],
    ['script', { charset: 'UTF-8', id: 'LA_COLLECT', src: '//sdk.51.la/js-sdk-pro.min.js' }],
    ['script', {}, 'LA.init({id:"LACPxYLMZjZJqlRu",ck:"LACPxYLMZjZJqlRu",autoTrack:true})'],
  ],

  themeConfig: {
    nav: [
      { text: '首页', link: '/' },
      { text: '快速开始', link: '/guide/getting-started' },
      { text: '获取正式版', link: '/guide/pricing' },
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
            { text: '获取正式版', link: '/guide/pricing' },
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
