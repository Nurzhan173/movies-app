module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: "plugin:react/recommended",
  overrides: [
    {
      env: {
        node: true,
      },
      files: [".eslintrc.{js,cjs}"],
      parserOptions: {
        sourceType: "script",
      },
    },
  ],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["@typescript-eslint", "react"],
  settings: {
    react: {
      version: "detect", // Automatically detect the React version
    },
  },
  rules: {},
};
