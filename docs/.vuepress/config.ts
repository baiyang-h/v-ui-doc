import { defaultTheme } from 'vuepress'
import { path } from '@vuepress/utils'
import navbar from './config/navbar'
import sidebar from './config/sidebar'

module.exports = {
  lang: 'zh-CN',
  title: '图一乐',
  description: '通用组件、业务组件、工具方法等',
  theme: defaultTheme({
    // 默认主题配置
    navbar,
    sidebar,
    // 404 page
    notFound: [
      '这里什么都没有',
      '我们怎么到这来了？',
      '这是一个 404 页面',
      '看起来我们进入了错误的链接',
    ],
    backToHome: '返回首页',
  }),
  plugins: [
    [
      '@vuepress/plugin-register-components',
      {
        componentsDir: path.resolve(__dirname, './components')
      }
    ],
  ]
}