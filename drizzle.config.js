/** @type { import("drizzle-kit").Config } */
export default {
    schema: "./utils/schema.tsx",
    dialect: 'postgresql',
    dbCredentials: {
      url: 'postgresql://owner:ys6XnB5RtVLW@ep-polished-sound-a5e3q542.us-east-2.aws.neon.tech/AI-Content_Generator?sslmode=require',
    }
  };