module.exports = {
  apps: [
    {
      name: `storytime-waitlist-${process.env.NODE_ENV || "development"}`,
      script: "serve",
      env: {
        PM2_SERVE_PATH: ".",
        PM2_SERVE_PORT: process.env.PORT || 3300,
        PM2_SERVE_SPA: "true",
      },
    },
  ],
};
