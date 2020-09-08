module.exports = {
  async rewrites() {
    const {CLIENT = "default"} = process.env;
    return [
      // we need to define a no-op rewrite to trigger checking
      // all pages/static files before we attempt proxying
      {
        source: "/client/:slug",
        destination: `/client/${CLIENT}/:slug`,
      },
    ];
  },
};
