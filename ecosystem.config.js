module.exports = {
  apps: [
    {
      name: `storytime-waitlist-${process.env.NODE_ENV || "development"}`,
      script: "npx",
      args: "serve -s -l 4500 .",
      env: {
        NODE_ENV: process.env.NODE_ENV || "development",
      },
    },
  ],
};
