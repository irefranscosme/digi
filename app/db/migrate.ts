import 'dotenv/config';
import { db } from '.';
import { migrate } from 'drizzle-orm/postgres-js/migrator';

migrate(db, { migrationsFolder: 'drizzle/migrations' });
