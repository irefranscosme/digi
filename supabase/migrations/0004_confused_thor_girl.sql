ALTER TABLE "income_streams" ALTER COLUMN "monthly_expenses" SET DATA TYPE jsonb;--> statement-breakpoint
ALTER TABLE "income_streams" ALTER COLUMN "monthly_expenses" DROP DEFAULT;