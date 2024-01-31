module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: ["eslint:recommended", "plugin:react/recommended", "plugin:react-hooks/recommended", "plugin:react/jsx-runtime", "prettier"],
  overrides: [],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["react", "react-hooks"],
  rules: { "no-unused-vars": "warn", "react/no-unknown-property": "off", "react-hooks/rules-of-hooks": "error", "react-hooks/exhaustive-deps": "warn", "react/prop-types": "off" },
};
