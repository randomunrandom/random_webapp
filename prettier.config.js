module.exports = {
  trailingComma: "none",
  arrowParens: "always",
  vueIndentScriptAndStyle: true,
  quoteProps: "consistent",
  overrides: [
    {
      files: "*.pug",
      options: {
        parser: "pug"
      }
    }
  ]
};
