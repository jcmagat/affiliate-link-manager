CREATE TABLE "url" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"original_url" varchar(256) NOT NULL,
	"short_code" varchar(256) NOT NULL,
	"created_at" date DEFAULT now() NOT NULL,
	"visits" integer DEFAULT 0 NOT NULL
);
