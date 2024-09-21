DO $$ BEGIN
 CREATE TYPE "public"."income_streams_income_type_enum" AS ENUM('job', 'business', 'freelance', 'part-time');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
