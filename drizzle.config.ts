import { config } from 'dotenv';
import { defineConfig } from 'drizzle-kit';

config({ path: '.env.local' });

export default defineConfig({
    dialect: 'postgresql',
    schema: './app/db/schema.ts',
    out: './supabase/migrations',
    dbCredentials: {
        url: process.env.POSTGRES_URL as string,
    },
});
