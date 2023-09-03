import React,{useState,useEffect} from "react";
import { json } from "react-router-dom";

export default function ChatData(content, author) {
    const[chatData ,setChatData]= useState("")
  const token = localStorage.getItem("A-gpt4Token");
  
  
  useEffect(() => {
    
      fetch("http://assistantgpt4.com/post/", {
        method: "POST",
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          content: content,
          author: author,
        }),
      })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        console.log(data)
        setChatData(data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
    } , [])
      return chatData;
}
  
