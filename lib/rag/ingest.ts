import { readFileSync } from "node:fs";
import { resolve } from "node:path";
import { chunkMarkdown } from "./chunking";
import { documents, InsertDocument } from "../db/schema";
import { generateEmbeddings } from "./embedding";
import { db } from "../db/config";


async function embed(chunks: Pick<InsertDocument, "content" | "metadata">[]) {
    const chunksToEmbed: string[] = chunks.map(c => c.content);
    const embeddings = await generateEmbeddings(chunksToEmbed);

    const final = chunks.map((chunk, i) => ({
        ...chunk,
        embedding: embeddings[i]
    }));

    return final;
}


async function main() {
    let allChunks: Pick<InsertDocument, "content" | "metadata">[] = [];
    
    try {
        const files = ["projects.md", "me.md"];

        for (const file of files) {
            const fpath = resolve(__dirname, `../../knowledge-base/${file}`);
            const markdown = readFileSync(fpath, "utf-8");

            const isPersonal = file.includes("me.md");
            const params = { 
                size: isPersonal ? 500 : 1000,
                overlap: isPersonal ? 50 : 100
            };

            console.log(`\nProcessing: ${file} (Size: ${params.size}, Overlap: ${params.overlap})`);

            const chunks = await chunkMarkdown(markdown, file, params);

            console.log(`\nGenerated chunk length: ${ chunks.length } for ${ file }`);
            allChunks = [...allChunks, ...chunks]
        }

        console.log(`\n--- Final Result ---`);
        console.log(`Total chunks collected: ${ allChunks.length }`);
        console.log(`checking 1 chunk: ${ JSON.stringify(allChunks[3]) }`);

        const finalDocs = await embed(allChunks);

        await db.insert(documents).values(finalDocs);

        console.log(`Markdowns ingested successfully. Document length: ${ finalDocs.length }.`);
    } catch (error) {
        console.error("Error reading file: ", error);
    }
}

main();