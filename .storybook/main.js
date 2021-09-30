const loaders = (options = {}) => [
  { loader: "style-loader" },
  {
    loader: "css-loader",
    options: {
      importLoaders: 1,
      ...options,
    },
  },
  { loader: "postcss-loader" },
];

module.exports = {
  stories: ["../@(components|pages)/**/*.stories.@(js|jsx|ts|tsx|mdx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    {
      name: "@storybook/addon-postcss",
      options: {
        postcssLoaderOptions: {
          implementation: require("postcss"),
        },
      },
    },
  ],
  webpackFinal: async (config) => ({
    ...config,
    module: {
      ...config.module,
      rules: config.module.rules.reduce(
        (acc, cur) => [
          ...acc,
          ...(cur.test?.toString() === /\.css$/.toString()
            ? [
                {
                  test: /\.module\.css$/,
                  use: loaders({ modules: true }),
                },
                {
                  test: /^.*(?<!\.module)\.css$/,
                  use: loaders(),
                },
              ]
            : [cur]),
        ],
        []
      ),
    },
  }),
};
