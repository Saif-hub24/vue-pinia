module.exports = {
  root: true,
  env: {
    node: true,
    "vue/setup-compiler-macros": true,
  },
  extends: [
    "plugin:vue/vue3-essential",
     "@vue/airbnb",
     "eslint:recommended"
    ],
  parserOptions: {
    parser: "@babel/eslint-parser",
  },
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
    "linebreak-style": 0,
    "comma-dangle":['error', 'always-multiline'],
    "semi": ['error', 'always'],
    "operator-linebreak": 0,
    // 'jsx-a11y/click-events-have-key-events': 'off',
    'vuejs-accessibility/click-events-have-key-events': 'off',
    quotes: [2, "single", { avoidEscape: true, allowTemplateLiterals: true }],
  },
};
