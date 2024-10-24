// "use client"

// import axios from "axios";
// import * as z from "zod";
// import { MessageSquare } from "lucide-react";
// import { useForm } from "react-hook-form";
// import { zodResolver } from "@hookform/resolvers/zod";

// import { Heading } from "@/components/heading";
// import { Form, FormControl, FormField, FormItem } from "@/components/ui/form";
// import { formSchema } from "./constants";
// import { Input } from "@/components/ui/input";
// import { Button } from "@/components/ui/button";
// import { useRouter } from "next/navigation";
// import { useState } from "react";

// // Define the type here
// type ChatCompletionMessageParam = {
//   role: "user" | "system" | "assistant";
//   content: string;
// };

// const ConversationPage = () => {
//     const router = useRouter();
//     const [messages, setMessages] = useState<ChatCompletionMessageParam[]>([]);

//     const form = useForm<z.infer<typeof formSchema>>({
//         resolver: zodResolver(formSchema),
//         defaultValues: {
//             prompt: ""
//         }
//     });

//     const isLoading = form.formState.isSubmitting;
    
//     const onSubmit = async (values: z.infer<typeof formSchema>) => {
//        try {
//          const userMessage: ChatCompletionMessageParam = {
//             role: "user",
//             content: values.prompt,
//          };

//          // Update state with the new user message
//          const newMessages = [...messages, userMessage];
//          setMessages(newMessages);

//          // Make API call to OpenAI
//          const response = await axios.post("/api/conversation", {
//             messages: newMessages,
//          });

//          // Extract the assistant's message from the response
//          const assistantMessage: ChatCompletionMessageParam = {
//             role: "assistant",
//             content: response.data.choices[0].message.content,  // Adjust according to actual API response
//          };

//          // Add the assistant response to the state
//          setMessages((current) => [...current, assistantMessage]);

//          // Reset the form
//          form.reset();

//        } catch (error: any) {
//             console.log(error);
//        } finally {
//             router.refresh();
//        }
//     };

//     return (
//         <div>
//             <Heading
//                 title="Conversation"
//                 description="Our most advanced conversation model."
//                 icon={MessageSquare}
//                 iconColor="text-violet-500"
//                 bgColor="bg-violet-500/10"
//             />
//             <div className="px-4 lg:px-8">
//                 <div>
//                     <Form {...form}>
//                         <form 
//                         onSubmit={form.handleSubmit(onSubmit)}
//                         className="
//                         rounded-lg
//                         border
//                         w-full
//                         p-4
//                         px-3
//                         md:px-6
//                         focus-within:shadow-sm
//                         grid
//                         grid-cols-12
//                         gap-2
//                         "
//                         >
//                            <FormField
//                               name="prompt"
//                               render={({ field }) => (
//                                 <FormItem className="col-span-12 lg:col-span-10">
//                                     <FormControl className="m-0 p-0">
//                                         <Input
//                                         className="border-0 outline-none 
//                                         focus-visible:ring-0
//                                         focus-visible:ring-transparent"
//                                         disabled={isLoading}
//                                         placeholder="How do I calculate the radius of a circle?"
//                                         {...field}
//                                         />
//                                     </FormControl>
//                                 </FormItem>
//                               )}
//                            />
//                             <Button className="col-span-12 lg:col-span-2 w-full" disabled={isLoading}>
//                                 Generate 
//                             </Button> 
//                         </form>
//                     </Form>
//                 </div>
//                 <div className="space-y-4 mt-4">
//                     <div className="flex flex-col-reverse gap-y-4">
//                         {messages.map((message, index) => (
//                             <div key={index}>
//                                 <strong>{message.role === "user" ? "User: " : "Assistant: "}</strong>
//                                 {message.content}
//                             </div>
//                         ))}
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default ConversationPage;


// "use client"

// import axios from "axios";
// import * as z from "zod";
// import { MessageSquare } from "lucide-react";
// import { useForm } from "react-hook-form";
// import { zodResolver } from "@hookform/resolvers/zod";

// import { Heading } from "@/components/heading";
// import { Form, FormControl, FormField, FormItem } from "@/components/ui/form";
// import { formSchema } from "./constants";
// import { Input } from "@/components/ui/input";
// import { Button } from "@/components/ui/button";
// import { useRouter } from "next/navigation";
// import { useState } from "react";
// import  ChatCompletionMessageParam  from "openai";



// const ConversationPage = () => {
//     const router = useRouter();
//     const [messages, setMessages] = useState<ChatCompletionMessageParam[]>([]);

//     const form = useForm<z.infer<typeof formSchema>>({
//         resolver: zodResolver(formSchema),
//         defaultValues: {
//             prompt: ""
//         }
//     });

//     const isLoading = form.formState.isSubmitting;
    
//     const onSubmit = async (values: z.infer<typeof formSchema>) => {
//        try {
//          const userMessage: ChatCompletionMessageParam = {
//             role: 'user'| 'assistant' | 'system',
//             content: values.prompt,
//          };

//          // Update state with the new user message
//          const newMessages = [...messages, userMessage];
//          setMessages(newMessages);

//          // Make API call to OpenAI
//          const response = await axios.post("/api/conversation", {
//             messages: newMessages,
//          });

//          // Add the assistant response to the state
//          setMessages((current) => [...current, userMessage,response.data]);

//          // Reset the form
//          form.reset();

//        } catch (error: any) {
//             console.log(error);
//        } finally {
//             router.refresh();
//        }
//     };

//     return (
//         <div>
//             <Heading
//                 title="Conversation"
//                 description="Our most advanced conversation model."
//                 icon={MessageSquare}
//                 iconColor="text-violet-500"
//                 bgColor="bg-violet-500/10"
//             />
//             <div className="px-4 lg:px-8">
//                 <div>
//                     <Form {...form}>
//                         <form 
//                         onSubmit={form.handleSubmit(onSubmit)}
//                         className="
//                         rounded-lg
//                         border
//                         w-full
//                         p-4
//                         px-3
//                         md:px-6
//                         focus-within:shadow-sm
//                         grid
//                         grid-cols-12
//                         gap-2
//                         "
//                         >
//                            <FormField
//                               name="prompt"
//                               render={({ field }) => (
//                                 <FormItem className="col-span-12 lg:col-span-10">
//                                     <FormControl className="m-0 p-0">
//                                         <Input
//                                         className="border-0 outline-none 
//                                         focus-visible:ring-0
//                                         focus-visible:ring-transparent"
//                                         disabled={isLoading}
//                                         placeholder="How do I calculate the radius of a circle?"
//                                         {...field}
//                                         />
//                                     </FormControl>
//                                 </FormItem>
//                               )}
//                            />
//                             <Button className="col-span-12 lg:col-span-2 w-full" disabled={isLoading}>
//                                 Generate 
//                             </Button> 
//                         </form>
//                     </Form>
//                 </div>
//                 <div className="space-y-4 mt-4">
//                     <div className="flex flex-col-reverse gap-y-4">
//                         {messages.map((message) => (
//                             <div key={message.content}>
                        
//                                 {message.content}
//                             </div>
//                         ))}
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default ConversationPage;

"use client";

import axios from "axios";
import * as z from "zod";
import { MessageSquare } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Heading } from "@/components/heading";
import { Form, FormControl, FormField, FormItem } from "@/components/ui/form";
import { formSchema } from "./constants";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { useState } from "react";

// Define the type for chat messages
type ChatCompletionRequestMessage = {
  role: "system" | "user" | "assistant";
  content: string;
};

const ConversationPage = () => {
  const router = useRouter();
  const [messages, setMessages] = useState<ChatCompletionRequestMessage[]>([]);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      prompt: "",
    },
  });

  const isLoading = form.formState.isSubmitting;

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      // User message
      const userMessage: ChatCompletionRequestMessage = {
        role: "user",
        content: values.prompt,
      };

      // Add user's message to the state
      const newMessages = [...messages, userMessage];
      setMessages(newMessages);

      // Make API call to OpenAI
      const response = await axios.post(
        "https://api.openai.com/v1/chat/completions", // OpenAI API URL
        {
          model: "gpt-3.5-turbo", // The model to use
          messages: newMessages, // Send the conversation so far
        },
        {
          headers: {
                      },
        }
      );

      console.log(response.data); // Debugging the response
      // Hello

      // Extract the assistant's message
      const assistantMessage: ChatCompletionRequestMessage = {
        role: "assistant",
        content: response.data.choices[0].message.content, // Access the response content
      };

      // Add assistant's response to the state
      setMessages((current) => [...current, assistantMessage]);

      // Reset the form
      form.reset();
    } catch (error: any) {
      console.log("Error: ", error.response?.data || error.message); // Log any errors
    } 
  };

  return (
    <div>
      <Heading
        title="Conversation"
        description="Our most advanced conversation model."
        icon={MessageSquare}
        iconColor="text-violet-500"
        bgColor="bg-violet-500/10"
      />
      <div className="px-4 lg:px-8">
        <div>
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="
                rounded-lg
                border
                w-full
                p-4
                px-3
                md:px-6
                focus-within:shadow-sm
                grid
                grid-cols-12
                gap-2
              "
            >
              <FormField
                name="prompt"
                render={({ field }) => (
                  <FormItem className="col-span-12 lg:col-span-10">
                    <FormControl className="m-0 p-0">
                      <Input
                        className="border-0 outline-none 
                          focus-visible:ring-0
                          focus-visible:ring-transparent"
                        disabled={isLoading}
                        placeholder="How do I calculate the radius of a circle?"
                        {...field}
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
              <Button
                className="col-span-12 lg:col-span-2 w-full"
                disabled={isLoading}
              >
                Generate
              </Button>
            </form>
          </Form>
        </div>
        <div className="space-y-4 mt-4">
          <div className="flex flex-col-reverse gap-y-4">
            {messages.map((message, index) => (
              <div key={index}>
                <strong>{message.role === "user" ? "User: " : "Assistant: "}</strong>
                {message.content}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConversationPage;
