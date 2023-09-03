import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import HomeNav from "./HomeNav/HomeNav";
import ProductCart from "./ProductCart/ProductCart";
import "./Home.css";

const Home = () => {
  const [typedText, setTypedText] = useState("");
  const [index, setIndex] = useState(0);
  const text = "دستیار جی پی تی ، فراتر از Chat GPT ...";

  useEffect(() => {
    if (index < text.length) {
      const timer = setInterval(() => {
        setTypedText((prev) => prev + text[index]);
        setIndex((prev) => prev + 1);
      }, 100); // Change the delay for faster or slower typing

      return () => clearInterval(timer);
    }
  }, [index, text]);

  return (
    <div className="home">
      <HomeNav></HomeNav>
      <div className="mainStarter">
        <div className="background-video-container">
          <video autoPlay loop muted className="background-video">
            <source
              src={
                "https://openaicomproductionae4b.blob.core.windows.net/production-twill-01/121dd5e0-eaea-424d-bdf2-db02ca1f5e55/gpt-4-92586ac_1080p60.mp4"
              }
              type="video/mp4"
            />
          </video>
          <p className="mainStartrerTitle">{typedText}</p>
          <div className="accountBtn">
            <Link className="accountLink" to='./Registration'>
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
              ساخت حساب کاربری
            </Link>
          </div>
        </div>
      </div>
      <div className="mainProducts">
        <p className="mainStartrerTitle">دسترسی سریع</p>
      <ProductCart title="GPT-3.5 Pro" explane="این یک متن تستی است" path="/Chat3Pro" image="https://seeklogo.com/images/C/chatgpt-logo-02AFA704B5-seeklogo.com.png" altImg="GPT-3.5 Logo" BGcolor="#75A99C"></ProductCart>
      <ProductCart title="GPT-4 Pro" explane="این یک متن تستی است" path="/Chat3Pro" image="https://seeklogo.com/images/C/chatgpt-logo-02AFA704B5-seeklogo.com.png" altImg="GPT-3.5 Logo" BGcolor="#A469F1"></ProductCart>
      <ProductCart title="GPT-Assistant" explane="این یک متن تستی است" path="/Chat3Pro" image="https://seeklogo.com/images/C/chatgpt-logo-02AFA704B5-seeklogo.com.png" altImg="GPT-3.5 Logo" BGcolor="#FFA600"></ProductCart>
      </div>
    </div>
  );
};

export default Home;
