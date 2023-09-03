import React, { useState, useEffect } from 'react';
import axios from 'axios';
import HomeNavBtn from "./HomeNavBtn/HomeNavBtn";
import {Link} from 'react-router-dom';
import "./HomeNav.css";


function HomeNav() {
  const profileBtnText = "حساب کاربری"
  

  return (
    <div className="HomeNav">
      <div className="NavContent">
        <h2 className="Navlogo-name">A-GPT4</h2>
        <div className="NavbarBtns">
          <HomeNavBtn content="درباره ما" path="/HomeChat"></HomeNavBtn>
          <HomeNavBtn content="مقاله ها" path="/HomeChat"></HomeNavBtn>
          <HomeNavBtn content="چت مدل ها" path="/HomeChat"></HomeNavBtn>
          <Link className="profileBtn"> <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6"
              >
                <path
                  fill-rule="evenodd"
                  d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z"
                  clip-rule="evenodd"
                />
              </svg>
              {profileBtnText}</Link>
        </div>
      </div>
    </div>
  );
}

export default HomeNav;
