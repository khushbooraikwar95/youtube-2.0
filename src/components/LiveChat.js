import React, { useEffect } from "react";
import ChatMessage from "./ChatMessage";

const LiveChat = () => {
  useEffect(() => {
    const i = setInterval(() => {
      // API polling
      console.log("Polling");
    }, 2000);

    return () => {
      clearInterval(i);
    };
  }, []);

  return (
    <div className="w-full h-[600px] ml-2 p-2  border border-black bg-slate-100 rounded-lg ">
      <ChatMessage
        name="Khushboo R"
        message="This is Khushboo's Live Chat where can write whatever she want 😜"
      />
    </div>
  );
};

export default LiveChat;
