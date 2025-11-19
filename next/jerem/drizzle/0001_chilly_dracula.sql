CREATE TYPE "public"."skill_status" AS ENUM('undetermined', 'not-aquired', 'in_progress', 'aquired');--> statement-breakpoint
CREATE TABLE "themes" (
	"id" serial PRIMARY KEY NOT NULL,
	"description" text NOT NULL
);
--> statement-breakpoint
ALTER TABLE "skills" DROP CONSTRAINT "skills_description_unique";--> statement-breakpoint
ALTER TABLE "skills" ADD COLUMN "theme_id" integer;--> statement-breakpoint
ALTER TABLE "skills" ADD COLUMN "skill_status" "skill_status" DEFAULT 'undetermined' NOT NULL;--> statement-breakpoint
ALTER TABLE "skills" ADD CONSTRAINT "skills_theme_id_themes_id_fk" FOREIGN KEY ("theme_id") REFERENCES "public"."themes"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "skills" DROP COLUMN "description";