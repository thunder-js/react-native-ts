module.exports = ({ platform }, { module, resolve }) => ({
  entry: `./src/index.js`,
  module: {
    ...module,
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'ts-loader'
      },
      ...module.rules
    ]
  },
  resolve: {
    ...resolve,
    symlinks: false,
    extensions: [
      '.ts',
      '.tsx',
      `.${platform}.ts`,
      '.native.ts',
      `.${platform}.tsx`,
      '.native.tsx',
      ...resolve.extensions
    ]
  }
});