module.exports = composePlugins({
  modern: true,
  basePath: '/blog',
  cleanUrls: true,
  trailingSlash: true,
  webpack5: true,
  eslint: {
    ignoreDuringBuilds: true, // save me grief
  },
  plugins: [[require('next-transpile-modules'), ['@rasahq/react-tabula'], {}]],
});

function composePlugins({ plugins = [], ...other }) {
  if (!(plugins.length > 0)) return other;
  return plugins.reduce((config, plugin) => {
    const [pluginModule, ...options] = [].concat(plugin);
    return options.length > 0
      ? pluginModule(...options)(config)
      : pluginModule(config);
  }, other);
}
