import { defineConfig } from 'drizzle-kit';
import { DB_URL } from 'src/db/db-connection';

export default defineConfig({
  schema: './src/**/**.schema.ts',
  out: './drizzle',
  dialect: 'postgresql',
  dbCredentials: {
    url: process.env[DB_URL],
  },
});
