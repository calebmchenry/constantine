module.exports = {
	extends: ["airbnb-base", "eslint-config-prettier"],
	env: {
		browser: true,
		jest: true,
		node: true,
	},
    parser: "@typescript-eslint/parser",
    plugins: ["@typescript-eslint", "prettier"],
    rules: {
        "no-console": 0,
        "camelcase": 0,
        "import/prefer-default-export": 0,
        "prettier/prettier": [
            "error",
            {
                "tabWidth": 4,
                "trailingComma": "es5",
                "semi": true,
                "singleQuote": true
            }
        ]
    },
    "settings": {
        "import/resolver": {
          "node": {
            "extensions": [".js", ".jsx", ".ts", ".tsx"]
          }
        }
      },
}