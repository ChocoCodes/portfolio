import { 
    streamText, 
    convertToModelMessages, 
    UIMessage, 
    tool, 
    InferUITools, 
    UIDataTypes, 
    stepCountIs 
} from 'ai'; 
import { gemini } from "@/lib/models";
import { NextRequest, NextResponse } from 'next/server';
import { z } from "zod";
import { semanticSearch } from '@/lib/db/semantic-search';

const tools = {
    searchKnowledgeBase: tool({
        description: "Search the knowledge base for relevant information",
        inputSchema: z.object({
            query: z.string().describe("The search query to find relevant documents"),
        }),
        execute: async ({ query }) => {
            try {
                const results = await semanticSearch(query);

                if (results.length === 0) {
                    return "No relevant information found in the knowledge base.";
                }

                const formatted = results.map((res, i) => `[${i + 1}] ${res.content}`).join("\n\n");
                return formatted;
            } catch (error) {
                console.error("Search error: ", error);
                return error instanceof Error ? error.message : "Error while searching the knowledge base";
            }
        }
    })
}

export type ChatTools = InferUITools<typeof tools>;
export type ChatMessage = UIMessage<never, UIDataTypes, ChatTools>;

export async function POST (req: NextRequest) {
    try {
        const { messages }: { messages: ChatMessage[] } = await req.json();

        const result = streamText({
            model: gemini('gemini-2.0-flash'),
            maxOutputTokens: 300,
            messages: await convertToModelMessages(messages),
            tools,
            system: `You are the AI Assistant of John Roland Octavio, with access to his personal data and projects. 
            When users ask questions, search the knowledge base for relevant information. Always search before answering if the question might relate to the given information.
            Base your answers on the search results when available. Give concise answers that correctly answer what the user is asking for. 
            If a question is asked that is not covered in the context, politely state that you don't have that specific information and tell the user to go to his Contacts page in the portfolio instead.`,
            stopWhen: stepCountIs(2)
        });
    
        return result.toUIMessageStreamResponse();
    } catch (error: unknown) {
        console.error("Chat API Error:", error);
        const errMessage = error instanceof Error ? "Failed to complete chat streaming." : "An unknown error occured.";
        return NextResponse.json({ error: errMessage }, { status: 400 });
    }
}