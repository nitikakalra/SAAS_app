// import { auth } from "@clerk/nextjs/server";
// import { NextResponse } from "next/server";
// import OpenAIApi from "openai";

// const openai = new OpenAIApi({
//   apiKey: process.env.OPENAI_API_KEY,
// });

// export async function POST(req: Request) {
//   try {
//     const {userId} = auth();
//     const body = await req.json();
//     const {messages} = body;

//     if(!userId){
//         return new NextResponse("Unauthorized",{status:401});
//     }

//     if (!process.env.OPENAI_API_KEY){
//         return new NextResponse("OpenAI API Key not configured",{status:500});
//     }

//     if(!messages){
//         return new NextResponse("Messages are required",{status:400});
//     }

//     const response = await openai.chat.completions.create({
//         model: "gpt-3.5-turbo",
//         messages
//     });
//     return NextResponse.json(response.choices[0].message);

//   } catch (error) {
//     console.log("[CONVERSATION.ERROR]", error);
//     return new NextResponse("Internal error",{status:500});
//   }
// }

// import { auth } from "@clerk/nextjs/server";
// import { NextResponse } from "next/server";
// import {Configuration,OpenAIApi} from "openai";

// const configuration = new Configuration({
//   apiKey: process.env.OPENAI_API_KEY,
// });

// export async function POST(req: Request) {
//   try {
//     const {userId} = auth();
//     const body = await req.json();
//     const {messages} = body;

//     if(!userId){
//         return new NextResponse("Unauthorized",{status:401});
//     }

//     if (!configuration.apiKey){
//         return new NextResponse("OpenAI API Key not configured",{status:500});
//     }

//     if(!messages){
//         return new NextResponse("Messages are required",{status:400});
//     }

//     const response = await openai.createChatCompletion({
//         model: "gpt-3.5-turbo",
//         messages
//     });
//     return NextResponse.json(response.choices[0].message);

//   } catch (error) {
//     console.log("[CONVERSATION.ERROR]", error);
//     return new NextResponse("Internal error",{status:500});
//   }
// }


import { auth } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";
import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(req: Request) {
  try {
    const { userId } = auth();
    const body = await req.json();
    const { messages } = body;

    if (!userId) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    if (!openai.apiKey) {
      return new NextResponse("OpenAI API Key not configured", { status: 500 });
    }

    if (!messages) {
      return new NextResponse("Messages are required", { status: 400 });
    }

    // Use the Chat API (for conversational models like gpt-3.5-turbo)
    const response = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: messages, // assuming messages are structured as required for the Chat API
    });

    return NextResponse.json(response.choices[0].message.content); // Return the generated message content

  } catch (error) {
    console.log("[CONVERSATION.ERROR]", error);
    return new NextResponse("Internal error", { status: 500 });
  }
}
