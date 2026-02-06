import { MarkdownTextSplitter } from "@langchain/textsplitters";
import { InsertDocument } from "../db/schema";

export async function chunkMarkdown(
    markdown: string,
    source: string, 
    chunkParams: { size: number, overlap: number }
) {
    const sections = markdown.split(/^(?=## )/gm);

    const splitter = new MarkdownTextSplitter({
        chunkSize: chunkParams.size,
        chunkOverlap: chunkParams.overlap
    });

    const h1 = markdown.match(/^# (.+)$/m)?.[1] ?? " ";
    let allChunks: Pick<InsertDocument, "content" | "metadata">[] = [];

    for (const section of sections) {
        const matchH2 = section.match(/^## (.+)$/m); // Get ## Header
        const currentH2 = matchH2 ? matchH2[1] : "";

        const docs = await splitter.createDocuments([section]);

        const mapped = docs.map(doc => {
            const stripped = doc.pageContent
                                .replace(/\r\n/g, '\n') // remove \r
                                .replace(/\*\*(.*?)\*\*/g, '$1') // **text** -> text
                                .trim();
            const headerContext = `Context: ${h1} ${currentH2 ? `> ${currentH2}`: ''}\n`;

            return {
                content: headerContext + stripped,
                metadata: {
                    source,
                    main_topic: h1,
                    sub_topic: currentH2,
                    headers: [h1, currentH2].filter(h => h.trim() !== "")
                }
            }
        });

        allChunks = [...allChunks, ...mapped]
    }

    return allChunks;
}