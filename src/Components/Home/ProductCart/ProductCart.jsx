import React, { useState } from 'react';
import { Link } from "react-router-dom";
import './ProductCart.css';

export default function ProductCart(props) {
  const [hovered, setHovered] = useState(false);
  const BGcolor={
    background: `linear-gradient(135deg, ${props.BGcolor}, #fff,${props.BGcolor})`
  }

  const hoverStyle = {
    ...BGcolor,
    background: props.BGcolor  // change this to whatever you want
  };

  return (
    <div className='ProductCart'
    style={hovered ? hoverStyle : BGcolor}
    onMouseEnter={() => setHovered(true)}
    onMouseLeave={() => setHovered(false)}
    
    >
        <Link className='ProductCartLink'  to={props.path}>
        <div className='CartTextContent' >
            <h2>{props.title}</h2>
            <p>{props.explane}</p>
        </div>
        <div className="CartPicContent">
            <img src={props.image} alt={props.altImg} />
        </div>
        </Link>
      
    </div>
  )
}
