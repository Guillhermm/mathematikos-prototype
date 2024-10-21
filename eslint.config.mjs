import eslint from '@typescript-eslint/eslint-plugin';

export default {
  plugins: {
    '@typescript-eslint': eslint,
  },
  rules: {
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': ['error'],
    'import/no-unresolved': 'off',
  },
  files: ['**/*.{ts,tsx}'],
};
