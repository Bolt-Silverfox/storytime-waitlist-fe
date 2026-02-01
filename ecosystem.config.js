module.exports = {
  apps: [
    {
      name: "storytime-waitlist-production",
      script: "npx",
      args: "serve -s -l 4500 .",
      cwd: "/home/ubuntu/storytime/production/waitlist",
      env: {
        NODE_ENV: "production",
      },
    },
    {
      name: "storytime-waitlist-development",
      script: "npx",
      args: "serve -s -l 3300 .",
      cwd: "/home/ubuntu/storytime/development/waitlist",
      env: {
        NODE_ENV: "development",
      },
    },
  ],
};
