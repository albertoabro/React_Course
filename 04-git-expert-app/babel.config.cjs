const path = require('path');
const commonPlugins = [
    [
        require.resolve('babel-plugin-module-resolver'),
        {
            root:[path.resolve('./src')],
            alias: {
                '@': './src',
            }
        },
    ],
];

module.exports = {
    presets: [
        ['@babel/preset-env', { targets: { esmodules: true } }],
        ['@babel/preset-react', { runtime: 'automatic' }],
    ],
    plugins: [...commonPlugins],
};