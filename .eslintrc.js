module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  root: true,
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint", "prettier"],
  parserOptions: {
    project: "./tsconfig.json",
    createDefaultProgram: "true",
    tsconfigRootDir: __dirname,
    ecmaFeatures: {
      jsx: true,
    },
  },
  env: {
    node: true,
  },
  extends: [
    "plugin:@typescript-eslint/recommended",
    "airbnb",
    "airbnb-typescript",
    "plugin:prettier/recommended",
    "next/core-web-vitals",
    // "@typescript-eslint/parser",
  ],
  rules: {
    // 'React' must be in scope when using JSX 에러 해결 (Next.js)
    "react/react-in-jsx-scope": "off",
    // ts파일에서 tsx구문 허용 (Next.js)
    "react/jsx-filename-extension": [1, { extensions: [".ts", ".tsx"] }],
    "import/prefer-default-export": "off",
    "react-hooks/exhaustive-deps": "off",
    "consistent-return": "off",
    "no-console": "off",
    "react/style-prop-object": "off",
    "import/extensions": ["off"],
    "prettier/prettier": ["off"],
    "@typescript-eslint/no-explicit-any": "off",
    "@typescript-eslint/no-unused-vars": "off",
    "react/require-default-props": "off",
    "jsx-a11y/click-events-have-key-events": "off",
    "jsx-a11y/no-static-element-interactions": "off",
  },
};
