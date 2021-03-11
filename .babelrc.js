module.exports = {
  plugins: [
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