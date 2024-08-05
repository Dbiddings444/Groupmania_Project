import React, { useState } from 'react';
import './PostForm.css';
import RichTextEditor from '../components/RichTextEditor';

const PostForm = () => {
  const [postType, setPostType] = useState('gif');
  const [content, setContent] = useState('');
  const [title, setTitle] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    setTitle('');
    setContent('');
    setPostType('');
    // Handle post submission logic here
    console.log(`Posted a ${postType}: ${content}`);
    console.log(`Posted a ${postType}: ${title} - ${content}`);
  };

  return (
    <form className="post-form" onSubmit={handleSubmit}>
    <input
      type="text"
      placeholder="Title"
      value={title}
      onChange={(e) => setTitle(e.target.value)}
      required
    />
    <input
      type="text"
      placeholder="Share your story"
      className='storyContent'
      value={content}
      onChange={(e) => setContent(e.target.value)}
      required
     
    />
    <button type="submit">Post</button>
  </form>
  );
};

export default PostForm;
