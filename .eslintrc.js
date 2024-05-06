/** @type {import('eslint').Linter.Config} */

module.exports = {
  root: true,
  extends: ['@react-native', 'prettier'],
  plugins: ['prettier'],
  rules: {
    'prettier/prettier': 'error',

    'react/jsx-uses-react': 'off',
    'react/react-in-jsx-scope': 'off',
  },
};
