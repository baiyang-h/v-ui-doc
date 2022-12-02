import mdContainer from 'markdown-it-container'

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
                        // 开始标签
                        return '<div><span>' + md.utils.escapeHtml(m[1]) + '</span>\n';
                    } else {
                        // 结束标签
                        return '</div>\n';
                    }
                }
            })
        }
    }
}

export default vuepressPluginDemoBlockPlus