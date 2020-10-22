module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  plugins: [
    '@typescript-eslint',
    'svelte3',
  ],

  overrides: [
    {
      files: ['*.svelte'],
      processor: 'svelte3/svelte3',
    }
  ],

  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
  ],

  rules: {
    quotes: [2, 'single', 'avoid-escape'],
    semi: ['error', 'always', {
      omitLastInOneLineBlock: true
    }],

    'comma-dangle': ['error', 'always-multiline'],

    '@typescript-eslint/member-delimiter-style': 'error',
  },

  env: {
    node: true,
    browser: true
  }
};
