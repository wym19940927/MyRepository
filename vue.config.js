module.exports = {
  publicPath: "/app/",
  outputDir: "app",
  css: {
    loaderOptions: {
      sass: {
        data: `
                    @import "@/style/svg.scss";
                    @import "@/style/mixin.scss";
                `,
      },
    },
  },
};
