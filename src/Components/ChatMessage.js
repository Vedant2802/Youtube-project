import React from "react";

const ChatMessage = ({ name, message }) => {
  return (
    <div className="flex items-center shadow-sm p-2">
      <img
        className=" h-12 "
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtRs_rWILOMx5-v3aXwJu7LWUhnPceiKvvDg&s"
        alt="chatIcon"
      />
      <span className="font-bold px-2">{name}</span>
      <p>{message}</p>
    </div>
  );
};

export default ChatMessage;
