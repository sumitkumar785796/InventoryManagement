import { dburl } from "./utils";
const { defineConfig } = require('drizzle-kit');

export default defineConfig({
  out: './drizzle',
  schema: './models/schema.js',
  dialect: 'postgresql',
  dbCredentials: {
    url: dburl,
  },
});
