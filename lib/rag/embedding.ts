import { embed, embedMany } from "ai";

// Query to embedding
export async function generateEmbedding(text: string) {
    const input = text.replace("\n", " ");

    const { embedding } = await embed({
        model: "text-embedding-3-small",
        value: input,
    });

    return embedding;
}

// Documents/Chunks to embedding
export async function generateEmbeddings(texts: string[]) {
    const inputs = texts.map(text => text.replace("\n", " "));

    const { embeddings } = await embedMany({
        model: "text-embedding-3-small",
        values: inputs,
    });

    return embeddings;
}