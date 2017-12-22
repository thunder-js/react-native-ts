module.exports = ({ platform }, { module, resolve }) => ({
  entry: `./src/storybook-index.js`,
  module: {
    ...module,
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
      },
      ...module.rules,
    ],
  },
  resolve: {
    ...resolve,
    extensions: [
      '.ts',
      '.tsx',
      `.${platform}.ts`,
      '.native.ts',
      `.${platform}.tsx`,
      '.native.tsx',
      ...resolve.extensions,
    ],
  },
});
