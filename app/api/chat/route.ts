import { streamText, convertToModelMessages, UIMessage } from 'ai'; 
import { gemini } from "@/utils/gemini";
import { NextRequest, NextResponse } from 'next/server';

export async function POST (req: NextRequest) {
    try {
        const { messages }: { messages: UIMessage[] } = await req.json();

        const result = streamText({
            model: gemini('gemini-2.0-flash'),
            messages: await convertToModelMessages(messages),
        })
    
        return result.toUIMessageStreamResponse();
    } catch (error: unknown) {
        console.error("Chat API Error:", error);
        const errMessage = error instanceof Error ? "Failed to complete chat streaming." : "An unknown error occured.";
        return NextResponse.json({ error: errMessage }, { status: 400 });
    }
}