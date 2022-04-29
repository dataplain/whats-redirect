module.exports = {
  "root": true,
  "env": {
    "node": true
  },
  "extends": [
    "plugin:vue/vue3-essential",
    "eslint:recommended",
  ],
  "parserOptions": {
    "parser": "@babel/eslint-parser"
  },
  "rules": {
    // "semi": ["error", "always"],
    "quotes": ["error", "double"],
    "indent": ["error", 2],
    "no-multi-spaces": ["error"]
  }
};
