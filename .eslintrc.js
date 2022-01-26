module.exports = {
  root: true,
  env: {
    es2021: true,
    node: true,
    jest: true,
  },
  extends: [
    'eslint:recommended',
    'airbnb-base/legacy',
  ],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
  },
  rules: {
    indent: ['error', 2],
    'linebreak-style': 'off',
    quotes: ['error', 'single'],
    'comma-dangle': ['error', 'always-multiline'],
    semi: ['error', 'always'],
  },
};
