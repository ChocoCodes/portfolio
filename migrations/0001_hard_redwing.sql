CREATE TABLE "documents" (
	"id" serial PRIMARY KEY NOT NULL,
	"content" text NOT NULL,
	"embedding" vector(1536),
	"metadata" jsonb NOT NULL
);
--> statement-breakpoint
CREATE INDEX "embeddingIdx" ON "documents" USING hnsw ("embedding" vector_cosine_ops);