import { defineConfig } from 'vitepress'

const siteUrl = 'https://probe.zhangjh.cn'

export default defineConfig({
  lang: 'zh-CN',
  title: 'Local Probe 线索雷达',
  description: '本地运行的小红书监控工具，设好关键词自动盯着，AI 筛选高相关帖子推送到微信，帮你第一时间触达潜在客户',

  sitemap: {
    hostname: siteUrl,
  },

  head: [
    ['meta', { name: 'keywords', content: 'Local Probe,线索雷达,小红书监控,小红书获客,社媒监控,AI获客,本地运行,企业微信推送' }],
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:site_name', content: 'Local Probe 线索雷达' }],
    ['meta', { property: 'og:title', content: 'Local Probe 线索雷达 — 别再手动刷小红书找客户了' }],
    ['meta', { property: 'og:description', content: '设好关键词，AI 自动筛选高相关帖子推送到微信，帮你第一时间触达潜在客户' }],
    ['meta', { property: 'og:url', content: siteUrl }],
    ['meta', { property: 'og:image', content: `${siteUrl}/images/dashboard.png` }],
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
