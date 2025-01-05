/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/chatSlice";
import { generateRandomName } from "../utils/Helper";

const LiveChat = () => {
  const dispatch = useDispatch();

  const chatMessages = useSelector((store) => store.chat.messages);
  //   console.log(">>>>", chatMessages);

  const [liveMessage, setLiveMessage] = useState("");

  useEffect(() => {
    const i = setInterval(() => {
      //Api Polling
      //   console.log("Api polling");
      dispatch(addMessage({ name: generateRandomName(), message: "Hello" }));
    }, 1500);

    return () => clearInterval(i);
  }, []);
  return (
    <>
      <div className="ml-2 p-2 border border-black w-full h-[600px] bg-slate-100 rounded-lg overflow-y-scroll flex flex-col-reverse">
        {/* LiveChat  DO NOT USE INDEXES AS KEYS*/}
        <div>
          {chatMessages.map((c, i) => (
            <ChatMessage name={c.name} message={c.message} key={i} />
          ))}
          {/* LiveChat */}
          {/* <ChatMessage name="Akshat Vedant" message="Hello" /> */}
          {/* <ChatMessage name="Akshat Vedant" message="Hello" />
      <ChatMessage name="Akshat Vedant" message="Hello" />
      <ChatMessage name="Akshat Vedant" message="Hello" />
      <ChatMessage name="Akshat Vedant" message="Hello" />
      <ChatMessage name="Akshat Vedant" message="Hello" />
      <ChatMessage name="Akshat Vedant" message="Hello" />
      <ChatMessage name="Akshat Vedant" message="Hello" />
      <ChatMessage name="Akshat Vedant" message="Hello" /> */}
        </div>
      </div>
      <form
        className="w-full p-2 ml-2 border border-black flex rounded-lg"
        onSubmit={(e) => {
          console.log("first", liveMessage);
          e.preventDefault();
          dispatch(
            addMessage({
              name: "Akshat Vedant",
              message: liveMessage,
            })
          );
          setLiveMessage("");
        }}
      >
        <input
          className="w-96 px-2 border border-black rounded-lg"
          type="text"
          value={liveMessage}
          onChange={(e) => {
            setLiveMessage(e.target.value);
          }}
        />
        <button className="px-2 mx-2 bg-gray-200 "> Send </button>
      </form>
    </>
  );
};

export default LiveChat;
