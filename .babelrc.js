module.exports = {
  plugins: [
    '@babel/plugin-proposal-class-properties',
  ],
  presets: [
    [
      '@babel/env',
      {
        modules: false,
        useBuiltIns: 'usage',
        corejs: '3',
      },
    ],
  ],
}