/** @type {import('eslint').Linter.Config} */
module.exports = {
  root: true,
  extends: ['@oechul/eslint-config/base.js', 'plugin:storybook/recommended'],
  globals: {
    React: true,
    JSX: true,
  },
  env: {
    browser: true,
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
};