DO $$ BEGIN
 CREATE TYPE "public"."income_streams_billing_enum" AS ENUM('hourly', 'fixed-price');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "income_streams" (
	"id" serial PRIMARY KEY NOT NULL,
	"income" jsonb NOT NULL,
	"monthly_expenses" text[] DEFAULT ARRAY[]::text[]
);
