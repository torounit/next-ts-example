// eslint-disable-next-line @typescript-eslint/no-var-requires,import/no-extraneous-dependencies
const config = require("eslint-config-next");

module.exports = {
  ...config,
  parser: "eslint-config-next/parser",
  extends: [
    ...config.extends,
    "next",
    "next/core-web-vitals",
    "eslint:recommended",
    "airbnb",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended",
    "prettier",
  ],
  plugins: ["@typescript-eslint"],
  settings: {
    "import/extensions": [".js", ".jsx", ".ts", ".tsx"],
    "import/resolver": {
      node: {
        extensions: [".js", ".jsx", ".ts", ".tsx"],
      },
    },
  },
  rules: {
    ...config.rules,
    "react/prop-types": "off",
    "react/require-default-props": "off",
    "react/jsx-props-no-spreading": "off",
    "no-use-before-define": "off",
    "@typescript-eslint/no-use-before-define": ["error"],
    "react/jsx-filename-extension": [
      2,
      { extensions: [".js", ".jsx", ".ts", ".tsx"] },
    ],
    "import/extensions": [
      "error",
      "ignorePackages",
      {
        js: "never",
        jsx: "never",
        ts: "never",
        tsx: "never",
      },
    ],
  },
  overrides: [
    ...config.overrides,
    {
      files: ["**/*.stories.tsx"],
      rules: {
        "import/no-extraneous-dependencies": "off",
        "import/no-anonymous-default-export": "off",
      },
    },
  ],
};
