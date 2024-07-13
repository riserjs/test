module.exports = {
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  env: {
    browser: true,
    es2021: true,
  },
  globals: {
    window: 'readonly',
    document: 'readonly',
    navigator: 'readonly',
    console: 'readonly',
  },
  extends: [
    'plugin:react/recommended',
  ],
  rules: {
    'react/prop-types': 'off',
    'no-unused-vars': ['warn', { vars: 'all', args: 'after-used', ignoreRestSiblings: false }],
    'react/react-in-jsx-scope': 'off',
    'quotes': ['error', 'single'],
    'semi': ['error', 'always'],
    'indent': ['error', 2],
    'react/jsx-key': 'error',
  },
};