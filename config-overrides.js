const {
    injectBabelPlugin
} = require('react-app-rewired')

module.exports = function override(config) {
    config = injectBabelPlugin(
        ['import', {
            libraryName: 'antd',
            libraryDirectory: 'es',
            style: 'css'
        }],
        config,
    )
    config = injectBabelPlugin(
        ['@babel/plugin-proposal-decorators', {
            "legacy": true
        }],
        config,
    )
    return config
}