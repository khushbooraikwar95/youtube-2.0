import React, { useEffect, useState } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/chatSlice";
import { generateRandomeName, makerandomMsg } from "../utils/helper";

const LiveChat = () => {
  const [liveMsg, setLiveMsg] = useState("");
  const dispatch = useDispatch();

  const ChatMessages = useSelector((store) => store.chat.messages);

  useEffect(() => {
    const i = setInterval(() => {
      // API polling

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
      <form
        className="w-full p-2 ml-2 border border-black"
        onSubmit={(e) => {
          e.preventDefault();
          dispatch(
            addMessage({
              name: "KhushRbg",
              message: liveMsg,
            })
          );
        }}
      >
        <input
          placeholder="type here..."
          className="px-2 w-96 border border-black"
          type="text"
          value={liveMsg}
          onChange={(e) => setLiveMsg(e.target.value)}
        ></input>
        <button className="px-5 mx-2 bg-slate-500">Send</button>
      </form>
    </>
  );
};

export default LiveChat;
