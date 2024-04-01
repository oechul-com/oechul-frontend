/** @type {import("eslint").Linter.Config} */
module.exports = {
  root: true,
  extends: ['@oechul/eslint-config/react-internal.js'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: true,
  },
};