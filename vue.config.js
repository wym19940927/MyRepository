module.exports = {
  publicPath: "/app/",
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
