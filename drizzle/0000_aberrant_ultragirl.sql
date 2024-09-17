CREATE TABLE IF NOT EXISTS "users" (
    "user_id" serial PRIMARY KEY NOT NULL,
    "email" text NOT NULL,
    "password" text NOT NULL,
    CONSTRAINT "users_email_unique" UNIQUE ("email")
);