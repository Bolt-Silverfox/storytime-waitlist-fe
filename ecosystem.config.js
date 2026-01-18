module.exports = {
  apps: [
    {
      name: `storytime-waitlist-${process.env.NODE_ENV || "development"}`,
      script: "npx",
      args: "serve -s -l 3300 .",
      env: {
        NODE_ENV: process.env.NODE_ENV || "development",
      },
    },
  ],
};
