export default [
  {
    files: ["src/**/*.js"],
    languageOptions: {
      globals: {
        process: "readonly",
        console: "readonly",
      },
    },
    rules: {
      "no-unused-vars": "warn",
    },
  },
];
