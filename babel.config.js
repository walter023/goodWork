module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['.'],
        alias: {
          styles: './src/styles',
          layouts: './src/layouts',
        },
      },
    ],
  ],
};
