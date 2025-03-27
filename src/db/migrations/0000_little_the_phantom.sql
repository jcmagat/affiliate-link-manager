CREATE TABLE "url" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"original_url" varchar(256) NOT NULL,
	"short_code" varchar(8) NOT NULL,
	"created_at" timestamp with time zone DEFAULT now(),
	"visits" integer DEFAULT 0 NOT NULL
);
