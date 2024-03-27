/** @type {import('eslint').Linter.Config} */
module.exports = {
  extends: ['@oechul/eslint-config/base.js'],
  env: {
    node: true,
  },
  ignorePatterns: ['dist/'],
};
