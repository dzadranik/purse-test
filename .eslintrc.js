module.exports = {
  // root: true,
  // env: { node: true },
  extends: [
    'airbnb-base',
    'plugin:cypress/recommended',
    'plugin:vue/recommended'
  ],
  parserOptions: { parser: 'babel-eslint' },
  rules: {
    semi: [2, 'never'],
    'arrow-body-style': 0,
    'arrow-parens': ['error', 'as-needed'],
    'comma-dangle': [2, 'never'],
    'func-names': ['error', 'as-needed'],
    'import/extensions': 0,
    'import/no-named-as-default-member': 0,
    'import/no-unresolved': 0,
    'linebreak-style': 0,
    'no-restricted-syntax': ['error', 'as-needed'],
    'max-len': 0,
    'no-console': 0,
    'no-param-reassign': ['error', { props: false }],
    'no-plusplus': ['error', { allowForLoopAfterthoughts: true }],
    'no-shadow': ['error', { allow: ['state', 'getters'] }],
    'no-underscore-dangle': 0,
    'operator-linebreak': ['error', 'after'],
    'space-before-function-paren': ['error', 'always'],
    'prefer-destructuring': 0,

    'cypress/no-unnecessary-waiting': 0,

    // vue plugin
    'vue/order-in-components': ['error', {
      order: [
        'name',
        'mixins',
        'components',
        'i18n',
        'directives',
        'props',
        'data',
        'computed',
        'watch',
        'methods',
        'beforeMount',
        'mounted'
      ]
    }]
  }
}
