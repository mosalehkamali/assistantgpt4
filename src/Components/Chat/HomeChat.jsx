import React from "react";
import "./HomeChat.css";

import HomeChatBtn from "./HomeChatBtn/HomeChatBtn";

const HomeChat = () => {




  return (
    <div className="homeChat">
      <div className="top-part">
        <h1 className="title">Assistant Gpt-4</h1>
        <div className="logo">
        <h2 className="logo-name">A-GPT4</h2>
        <img src="https://seeklogo.com/images/C/chatgpt-logo-02AFA704B5-seeklogo.com.png" alt="logoIcon" />

        </div>
        <p className="explane">
          Assistant Gpt-4 is a chatbot platform based on ChatGPT chat from
          OpenAI, which has the ability to voice conversation in addition to
          chat.
        </p>
      </div>
      <div className="bottom-part">
        <div className="home-btns">
        <HomeChatBtn path="/Chat3Pro" title="ChatGpt-3.5" explane = "Start conversation with chatGpt-3.5"  icon="https://seeklogo.com/images/C/chatgpt-logo-02AFA704B5-seeklogo.com.png"></HomeChatBtn>
        <HomeChatBtn path="/Chat3Pro" title="ChatGpt-3.5" explane = "Start conversation with chatGpt-3.5"  icon="https://seeklogo.com/images/C/chatgpt-logo-02AFA704B5-seeklogo.com.png"></HomeChatBtn>
        <HomeChatBtn path="/Chat3Pro" title="ChatGpt-3.5" explane = "Start conversation with chatGpt-3.5"  icon="https://seeklogo.com/images/C/chatgpt-logo-02AFA704B5-seeklogo.com.png"></HomeChatBtn>
        <HomeChatBtn path="/Chat3Pro" title="ChatGpt-3.5" explane = "Start conversation with chatGpt-3.5"  icon="https://seeklogo.com/images/C/chatgpt-logo-02AFA704B5-seeklogo.com.png"></HomeChatBtn>
        </div>
      </div>
    </div>
  );
};

export default HomeChat;
