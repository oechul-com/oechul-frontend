import eslintConfig from '@oechul/eslint-config/react-internal.js';
import { Linter } from 'eslint';

/**
 * @type {Linter.Config}
 */
export default {
  root: true,
  extends: [eslintConfig],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: true,
  },
};
