module.exports = {
  root: true,
  env: {
    browser: true,
    amd: true,
    node: true,
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
  extends: ['next/core-web-vitals', 'prettier'],
  globals: {
    React: 'writable',
  },
  rules: {
    'import/order': [
      'error',
      {
        groups: ['builtin', 'external', 'internal'],
        pathGroups: [
          {
            pattern: 'react',
            group: 'builtin',
            position: 'before',
          },
        ],
        pathGroupsExcludedImportTypes: ['builtin'],
        'newlines-between': 'always',
        alphabetize: {
          order: 'asc',
          caseInsensitive: true,
        },
      },
    ],
  },
};
