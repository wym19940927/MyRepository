module.exports = {
  plugins: {
    "postcss-import": {},
    "postcss-url": {},
    autoprefixer: {},
    "postcss-write-svg": {
      utf8: false,
    },
    "postcss-px-to-viewport": {
      viewportWidth: 750,
      unitPrecision: 3,
      viewportUnit: "vw",
      selectorBlackList: [".ignore", ".hairlines"],
      minPixelValue: 1,
      mediaQuery: false,
      exclude: /(\/|\\)(node_modules)(\/|\\)/,
    },
    "postcss-viewport-units": {},
    cssnano: {
      preset: "advanced",
      autoprefixer: false,
      "postcss-zindex": false,
    },
  },
};
