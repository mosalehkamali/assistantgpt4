import React, { useState, useEffect } from "react";
import TotalData from "../../Database/TotalData";
import "./Chat3Pro.css";

function Chat3Pro() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const [chatData, setChatData] = useState([]);
  const token = JSON.parse(localStorage.getItem("A-gpt4Token"));

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  function sendMessage() {
    fetch("http://assistantgpt4.com/post/", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token.token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        content: input,
        author: token.username,
      }),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        setChatData([...chatData, { response: data.response_gpt }]);
        console.log(data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });

    if (input) {
      setMessages([...messages, { text: input }]);
      setInput("");
      window.scrollTo(0, document.body.scrollHeight);
    }
  }

  return (
    <div className="Chat3Pro">
      <h2 className="ChatBotTitle">GPT-3.5pro</h2>
      <div className="chatBox">
        <div className="messages">
        {messages.map((message) => {
          return (
            <div className="clientMessage">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  
                  class="w-6 h-6"
                  >
                  <path
                    fill-rule="evenodd"
                    d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z"
                    clip-rule="evenodd"
                    />
                </svg>
                {message.text}
              </div>
          );
        })}
        </div>
        <div className="responses">

        {chatData.map((response) => {
          return (
            <div className="serverResponse">
              <div className="response">{response.response}</div>
            </div>
          );
        })}
        </div>
      </div>
      <div className="bottomGap"></div>
      <div className="message">
        <input
          className="messageInput"
          onChange={handleInputChange}
          onKeyDown={(e) => {
            if (e.keyCode === 13) {
              sendMessage();
            }
          }}
          value={input}
          type="text"
          placeholder="Send a message"
        />
        <button onClick={sendMessage} className="sendMessageBtn">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="w-5 h-5"
          >
            <path d="M3.105 2.289a.75.75 0 00-.826.95l1.414 4.925A1.5 1.5 0 005.135 9.25h6.115a.75.75 0 010 1.5H5.135a1.5 1.5 0 00-1.442 1.086l-1.414 4.926a.75.75 0 00.826.95 28.896 28.896 0 0015.293-7.154.75.75 0 000-1.115A28.897 28.897 0 003.105 2.289z" />
          </svg>
        </button>
      </div>
    </div>
  );
}

export default Chat3Pro;
