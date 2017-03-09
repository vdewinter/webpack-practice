#Webpack-1

**First, let's upgrade our reqiure and exports to ES6 syntax**

- `require => import`
- `exports => export`

##Setup
*Install Babel dependencies:*
- `npm i -D babel-core`
- `npm i -D babel-loader`
- `npm i -D babel-preset-es2015`
- `npm i -D babel-preset-latest`

*Add babelrc file:*
- `(root-dir) $ touch .babelrc`

Inside .babelrc add the following:

```
{
  "presets": ["es2015"]
}
```

*Add the Babel loader to the Webpack config:*
```
module.exports = {
  entry: './index.js',
  output: {
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      { test: /\.js$/, loader: 'babel' } // <-- babel loader
    ]
  }
};
```
