module.exports =
{
  "extends": "eslint:recommended",
  "parser": "babel-eslint",
  "env": {
    "browser": true,
    "node": true,
    "mocha": true
  },
  "plugins": [
    "react"
  ],
  "rules": {
    "no-debugger": 0,
    "no-console": 0,
    "no-case-declarations": 0,
    "new-cap": 0,
    "strict": 0,
    "no-underscore-dangle": 0,
    "no-use-before-define": 0,
    "eol-last": 0,
    "quotes": [2, "single"],
    "semi": ["error", "always"],
    "comma-dangle": [1, "always-multiline"],
    "jsx-quotes": [1, "prefer-single"],
    "react/jsx-no-undef": 2,
    "react/jsx-uses-react": 1,
    "react/jsx-uses-vars": 1
  }
};
