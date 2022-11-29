import MarkdownIt from 'markdown-it'
import mdContainer from 'markdown-it-container'

const vuepressPluginDemoBlockPlus = () => {
    return {
        name: 'vuepress-plugin-demoblock-plus',
        extendsMarkdown: (md) => {
            md.use(mdContainer, 'demo', {
                validate(params) {
                    return !!params.trim().match(/^demo\s*(.*)$/)
                },
                render(tokens, idx) {
                    const m = tokens[idx].info.trim().match(/^demo\s*(.*)$/)
                    console.log(11, m)
                    return ''
                }
            })
        }
    }
}

export default vuepressPluginDemoBlockPlus