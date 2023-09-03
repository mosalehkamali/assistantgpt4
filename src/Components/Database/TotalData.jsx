import React, { useState} from 'react';

export default function TotalData() {
    const[totalData ,setTotalData]= useState([])
    const token=localStorage.getItem("A-gpt4Token")

    fetch("http://assistantgpt4.com/post/posts_for", {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${token}` ,
      //   'Content-Type': 'application/json'  // if needed
      }
   })
   .then(response => {
      if (!response.ok) {
          throw new Error('Network response was not ok');
      }
      return response.json();
   })
   .then(data => {
      setTotalData(data)
   })
   .catch(error => {
      console.error('Error:', error);
   });
  
    return (totalData)
}
