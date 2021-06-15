module.exports = {
    types: [
        {
            type: 'feat',
            section: 'Funcionalidades',
        },
        {
            type: 'fix',
            section: 'correção de erros',
        },
        {
            type: 'perf',
            section: 'melhorias de performance',
        },
        {
            type: 'chore',
            hidden: true,
        },
        {
            type: 'docs',
            hidden: true,
        },
        {
            type: 'style',
            hidden: true,
        },
        {
            type: 'refactor',
            hidden: true,
        },
        {
            type: 'test',
            hidden: true,
        }
    ],
    releaseCommitMessageFormat: 'chore(release): {{currentTag}} [ci skip]'
}