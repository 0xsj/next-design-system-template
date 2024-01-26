const path = require("path");

module.exports = {
  presets: ["next/babel"],
  plugins: [
    [
      "@stylexjs/babel-plugin",
      {
        dev: process.env.NODE_ENV === "development",
        test: process.env.NODE_ENV === "test",
        runtimeInjection: false,
        genConditionalClasses: true,
        treeshakeCompensation: true,
        ustable_moduleResolution: {
          type: "CommonJS",
          rootDir: path.join(__dirname, "../.."),
        },
      },
    ],
  ],
};
