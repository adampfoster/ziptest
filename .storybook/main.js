const path = require('path')

module.exports = {
  // webpackFinal: async (config) => {
  //   // Remove the existing css rule
  //   config.module.rules = config.module.rules.filter(
  //     (f) => f.test.toString() !== '/\\.css$/'
  //   )

  //   config.module.rules.push({
  //     test: /\.css$/,
  //     use: [
  //       'style-loader',
  //       {
  //         loader: 'css-loader',
  //         options: {
  //           modules: true, // Enable modules to help you using className
  //         },
  //       },
  //     ],
  //     include: path.resolve(__dirname, '../src/styles'),
  //   })

  //   return config
  // },
  stories: [
    '../stories/**/*.stories.mdx',
    '../stories/**/*.stories.@(js|jsx|ts|tsx)',
    '../src/components/**/*.stories.@(js|jsx|ts|tsx)',
  ],
  presets: [path.resolve(__dirname, './next-preset.js')],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials'],
}
