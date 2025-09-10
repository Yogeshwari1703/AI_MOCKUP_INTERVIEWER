// const { defineConfig } = require("drizzle-kit");

// module.exports = defineConfig({
//   schema: "./utils/schema.js",
//   dialect: "postgresql",
//   dbCredentials: {
//     url:'postgresql://neondb_owner:npg_bVYTEwHNpm79@ep-red-feather-aerd3v9m-pooler.c-2.us-east-2.aws.neon.tech/ai-interview-mocker?sslmode=require&channel_binding=require'
//   }
// });

import { defineConfig } from "drizzle-kit";

export default defineConfig({
  schema: "./utils/schema.js",
  out: "./db/migrations",
  dialect: "postgresql",
  dbCredentials: {
    url: "postgresql://neondb_owner:npg_bVYTEwHNpm79@ep-red-feather-aerd3v9m-pooler.c-2.us-east-2.aws.neon.tech/ai-interview-mocker?sslmode=require&channel_binding=require"
  }
});
