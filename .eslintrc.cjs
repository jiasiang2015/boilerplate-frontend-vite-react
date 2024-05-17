module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  plugins: ['react-refresh'],
  rules: {
    "indent": ["error", 2],
    // object
    "object-curly-newline": ["error", {
      "ObjectExpression": { 
          "multiline": true, 
          "minProperties": 3
      },
      "ObjectPattern": { 
          "multiline": true, 
          "minProperties": 8
      },
      "ImportDeclaration": { 
          "multiline": true,
          "minProperties": 8
      },
      "ExportDeclaration": { 
          "multiline": true,
          "minProperties": 8
      }
    }],
    "no-use-before-define": ["error", {
      "functions": false,
      "classes": true,
      "variables": false,
      "allowNamedExports": false
    }],
    // typescript
    "@typescript-eslint/no-unused-vars": ["error", {
      "varsIgnorePattern": "^_",
      "argsIgnorePattern": "^_",
      "destructuredArrayIgnorePattern": "^_"
    }],
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
  },
}
