import { cosineDistance, desc, gt, sql } from "drizzle-orm";
import { db } from "./config";
import { documents } from "./schema";
import { generateEmbedding } from "../rag/embedding";

export async function semanticSearch(query: string, limit: number = 5) {
    const queryEmbedding = await generateEmbedding(query);

    const similarity = sql<number>`1-(${cosineDistance(documents.embedding, queryEmbedding)})`;
    
    const relevantChunks = await db.select({
        id: documents.id,
        content: documents.content,
        similarity,
    })
    .from(documents)
    .orderBy(desc(similarity))
    .limit(limit);


    console.log(relevantChunks);
    return relevantChunks;
}