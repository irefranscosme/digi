DO $$ BEGIN
 CREATE TYPE "public"."income_streams_income_type_enum" AS ENUM('job', 'business', 'freelance', 'part-time');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 CREATE TYPE "public"."income_streams_billing_enum" AS ENUM('hourly', 'fixed-price');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "income_stream_businesses" (
	"id" serial PRIMARY KEY NOT NULL,
	"sector" varchar(256) NOT NULL,
	"business_name" varchar(256) NOT NULL,
	"business_location" varchar(256) NOT NULL,
	"service_offered" varchar(256) NOT NULL,
	"target_audience" varchar(256)
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "income_stream_freelance" (
	"id" serial PRIMARY KEY NOT NULL,
	"job_title" varchar(256) NOT NULL,
	"skills" text[] NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "income_stream_jobs" (
	"id" serial PRIMARY KEY NOT NULL,
	"job_title" varchar(256) NOT NULL,
	"job_location" varchar(256) NOT NULL,
	"work_schedule" varchar(256) NOT NULL,
	"employment_type" varchar(256) NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "income_streams" (
	"id" serial PRIMARY KEY NOT NULL,
	"related_type" "income_streams_income_type_enum" NOT NULL,
	"related_id" integer NOT NULL,
	"monthly_expenses" jsonb[] NOT NULL
);
