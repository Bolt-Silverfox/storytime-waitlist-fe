module.exports = {
  apps: [
    {
      name: "storytime-waitlist-production",
      script: "node_modules/.bin/next",
      args: "start -p 4500",
      cwd: "/home/ubuntu/storytime/production/waitlist",
      env: {
        NODE_ENV: "production",
      },
    },
    {
      name: "storytime-waitlist-development",
      script: "node_modules/.bin/next",
      args: "start -p 3300",
      cwd: "/home/ubuntu/storytime/development/waitlist",
      env: {
        NODE_ENV: "development",
      },
    },
  ],
};
