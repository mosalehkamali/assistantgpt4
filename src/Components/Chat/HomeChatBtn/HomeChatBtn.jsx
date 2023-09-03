import React from 'react';
import {Link} from 'react-router-dom';
import './HomeChatBtn.css'

function HomeBtn(props){
    return(
        <div className="HomeChatBtn">
            <Link className='PageLink' to={props.path}>
            <img className='btn-img' src={props.icon} alt="icon" />
            <div className="btn-text">
                <p className='btn-title'>{props.title}</p>
                <p className='btn-explane'>{props.explane}</p>
            </div>
            </Link>
        </div>
    )
}

export default HomeBtn;