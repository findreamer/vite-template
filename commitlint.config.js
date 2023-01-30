/* eslint-disable no-undef */
module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'type-enum': [
      2,
      'always',
      [
        'build',
        'chore',
        'ci',
        'docs',
        'feat',
        'fix',
        'perf',
        'refactor',
        'revert',
        'style',
        'test'
      ]
    ],
    'subject-empty': [0],
    'subject-full-stop': [0],
    'type-case': [0],
    'type-empty': [0],
    'scope-empty': [0],
    'scope-case': [0]
  }
};
