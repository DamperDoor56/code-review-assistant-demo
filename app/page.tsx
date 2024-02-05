import { ChatWindow } from "@/components/ChatWindow";
import Image from "next/image";
import Robitus from '@/public/images/robot.png'

export default function Home() {
  const InfoCard = (
    <div className="p-4 md:p-8 rounded bg-[#25252d] w-full max-h-[85%] overflow-hidden">
      <h1 className="text-3xl md:text-4xl mb-4">
        Say hi to Robitus! Your code review assistant! 🦜🔗
      </h1>
      <Image src={Robitus} alt={"Robitus's face"} className="w-40 self-center" />

      <ul className="mt-9">
        <li className="text-l">
          🤝
          <span className="ml-2">
            This template showcases a simple chatbot using{" "}
            <a href="https://js.langchain.com/" target="_blank">
              LangChain.js
            </a>{" "}
            and the Vercel{" "}
            <a href="https://sdk.vercel.ai/docs" target="_blank">
              AI SDK
            </a>{" "}
            in a{" "}
            <a href="https://nextjs.org/" target="_blank">
              Next.js
            </a>{" "}
            project.
          </span>
        </li>
        <li className="text-l">
          👇
          <span className="ml-2">
            Try showing it your <code>code</code> below!
          </span>
        </li>
      </ul>
    </div>
  );
  return (
    <ChatWindow
      endpoint="api/chat"
      emoji="🤖"
      titleText="Robitus, the coding review assistant"
      placeholder="I'm an LLM with the role of code review assitant! Ask me about your code!"
      emptyStateComponent={InfoCard}
    ></ChatWindow>
  );
}
