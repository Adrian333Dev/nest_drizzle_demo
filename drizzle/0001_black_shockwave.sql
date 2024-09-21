CREATE TABLE IF NOT EXISTS "posts" (
    "post_id" serial PRIMARY KEY NOT NULL,
    "content" text,
    "published" boolean DEFAULT false,
    "timestamp" timestamp DEFAULT now(),
    "user_id" integer
);
--> statement-breakpoint
ALTER TABLE "users" ADD COLUMN "post_id" integer;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "posts" ADD CONSTRAINT "posts_user_id_users_user_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."users"("user_id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "users" ADD CONSTRAINT "users_post_id_posts_post_id_fk" FOREIGN KEY ("post_id") REFERENCES "public"."posts"("post_id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;