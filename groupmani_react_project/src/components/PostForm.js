import React, { useState } from 'react';
import './PostForm.css';

const PostForm = () => {
  const [postType, setPostType] = useState('gif');
  const [content, setContent] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle post submission logic here
    console.log(`Posted a ${postType}: ${content}`);
  };

  return (
    <form className="post-form" onSubmit={handleSubmit}>
      <div className="post-type-toggle">
        <button type="button" className={postType === 'gif' ? 'active' : ''} onClick={() => setPostType('gif')}>GIF</button>
        <button type="button" className={postType === 'article' ? 'active' : ''} onClick={() => setPostType('article')}>Article</button>
      </div>
      <textarea
        placeholder={`Share a ${postType}`}
        value={content}
        onChange={(e) => setContent(e.target.value)}
        required
      />
      <button type="submit">Post</button>
    </form>
  );
};

export default PostForm;
