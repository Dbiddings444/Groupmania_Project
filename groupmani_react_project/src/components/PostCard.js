import React, { useState } from 'react';
import './PostCard.css';
import'./Normalize.css'
import techGirl from '../assets/icon.png'
const Card = ({ title, content, imageUrl }) => {
    return (
      // <div className="card">
      //   {imageUrl && <img src={imageUrl} alt={title} className="card-image" />}
      //   <div className="card-content">
      //     <h3 className="card-title">{title}</h3>
      //     <p className="card-text">{content}</p>
      //   </div>
      // </div>
<div className="card">
{/* {imageUrl && <img src={techGirl} alt='Girl Please' className="card-image" />} */}
<img src={techGirl}></img>
<div className="card-content">
  <div className='top-content'>
  <div className='user'>UserName</div>
 <div className='card-title'> Is all tech good tech?</div>
  <div className='card-text'>This is article will give you the answers you need</div>
</div>
<div className='bottom-content'>
  <div>Likes</div>
  <div>Content</div>
</div>
</div>
</div>
    );
  };

export default Card;