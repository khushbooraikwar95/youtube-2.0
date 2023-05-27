import React, { useEffect } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/chatSlice";
import { generateRandomeName, makerandomMsg } from "../utils/helper";

const LiveChat = () => {
  const dispatch = useDispatch();

  const ChatMessages = useSelector((store) => store.chat.messages);

  useEffect(() => {
    const i = setInterval(() => {
      // API polling
      console.log("Polling");

      dispatch(
        addMessage({
          name: generateRandomeName(),
          message: makerandomMsg(30) + "😜",
        })
      );
    }, 1000);

    return () => {
      clearInterval(i);
    };
  }, []);

  return (
    <>
      <div className="w-full h-[600px] ml-2 p-2  border border-black bg-slate-100 rounded-lg overflow-y-scroll  flex flex-col-reverse ">
        <div>
          {ChatMessages.map((latestChat, index) => (
            <ChatMessage
              key={index}
              name={latestChat.name}
              message={latestChat.message}
            />
          ))}
        </div>
      </div>
      <div>
        <input type="text"></input>
      </div>
    </>
  );
};

export default LiveChat;
