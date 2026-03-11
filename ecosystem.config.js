module.exports = {
  apps: [
    {
      name: "storytime-waitlist-production",
      script: "server.js",
      cwd: "/home/ubuntu/storytime/production/waitlist",
      env: {
        NODE_ENV: "production",
        PORT: 4500,
        HOSTNAME: "0.0.0.0",
      },
    },
    {
      name: "storytime-waitlist-development",
      script: "server.js",
      cwd: "/home/ubuntu/storytime/development/waitlist",
      env: {
        NODE_ENV: "development",
        PORT: 3300,
        HOSTNAME: "0.0.0.0",
      },
    },
  ],
};
