const path = require("path");
const genDefaultConfig = require('@storybook/react/dist/server/config/defaults/webpack.config.js');

module.exports = (baseConfig, env) => {
  const defaultConfig = genDefaultConfig(baseConfig, env);

  defaultConfig.resolve = {
    extensions: ['.js', '.scss'], // what file extensions to expect
      modules: [ // where to look up the modules(packages)
      path.resolve(__dirname, '../src'), 'node_modules',
    ]
  };

  return defaultConfig;
};
