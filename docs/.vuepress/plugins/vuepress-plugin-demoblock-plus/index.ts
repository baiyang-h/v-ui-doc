import mdContainer from 'markdown-it-container'
import { path, fs } from '@vuepress/utils'

const vuepressPluginDemoBlockPlus = () => {
    return {
        name: 'vuepress-plugin-demoblock-plus',
        extendsMarkdown: (md) => {
            md.use(mdContainer, 'demo', {
                validate(params) {
                    return params.trim().match(/^demo\s*(.*)$/)
                },
                render(tokens, idx) {
                    const m = tokens[idx].info.trim().match(/^demo\s*(.*)$/)
                    if (tokens[idx].nesting === 1) {
                        const description = md.utils.escapeHtml(m[1])  // 描述内容

                        const sourceFileToken = tokens[idx + 2]
                        let source = ''
                        // :::demo  :::  中的内容 比如 table/base-table
                        const sourceFile = sourceFileToken.children?.[0].content ?? ''

                        if (sourceFileToken.type === 'inline') {
                            source = fs.readFileSync(
                                path.resolve(__dirname, '../../../examples', `${sourceFile}.vue`),
                                'utf-8'
                            )
                        }
                        console.log(44, source)

                        // 开始标签
                        return `<vp-demo
                            description="${encodeURIComponent(md.render(description))}"
                            path="${sourceFile}"
                            source="${encodeURIComponent(source)}"
                            raw-source="${encodeURIComponent(source)}"
                        >`;
                    } else {
                        // 结束标签
                        return `</vp-demo>`;
                    }
                }
            })
        }
    }
}

export default vuepressPluginDemoBlockPlus