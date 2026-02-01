module.exports = {
  apps: [
    {
      name: "storytime-waitlist-production",
      script: "serve",
      interpreter: "npx",
      args: "-s -l 4500 .",
      cwd: "~/storytime/production/waitlist",
      env: {
        NODE_ENV: "production",
      },
    },
    {
      name: "storytime-waitlist-development",
      script: "serve",
      interpreter: "npx",
      args: "-s -l 4501 .",
      cwd: "~/storytime/development/waitlist",
      env: {
        NODE_ENV: "development",
      },
    },
  ],
};
