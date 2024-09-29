module.exports = {
  parser: '@typescript-eslint/parser',
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
  ],
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
  },
  rules: {
    // Add custom rules here if necessary
  },
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      rules: {
        // Add TypeScript-specific rules here if necessary
      },
    },
  ],
};
