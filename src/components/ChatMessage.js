import React from "react";

const ChatMessage = ({ name, message }) => {
  return (
    <div className="flex items-center shadow-sm ">
      <img
        className="h-8"
        alt="user-icon"
        src="https://as2.ftcdn.net/v2/jpg/02/29/75/83/1000_F_229758328_7x8jwCwjtBMmC6rgFzLFhZoEpLobB6L8.jpg"
      />
      <span className="font-bold px-4"> {name}</span>
      <span>{message}</span>
    </div>
  );
};

export default ChatMessage;
