const { defaultTheme } = require('vuepress')
const navbar = require('./config/navbar')

module.exports = {
  lang: 'zh-CN',
  title: 'UI',
  description: '组件库',
  theme: defaultTheme({
    // 默认主题配置
    navbar
  })
}