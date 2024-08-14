import React, { useState } from 'react';
import './PostPage.css';
import Header from '../components/Header'
const PostPage = ({ title, content, imageUrl }) => {
  const [likes, setLikes] = useState(0);
  const [comments, setComments] = useState([
    { id: 1, text: 'Great post!', author: 'User1' },
    { id: 2, text: 'Thanks for sharing!', author: 'User2' },
  ]);
  const [newComment, setNewComment] = useState('');

  const handleLike = () => {
    setLikes(likes + 1);
  };

  const handleCommentSubmit = (e) => {
    e.preventDefault();
    if (newComment.trim()) {
      setComments([...comments, { id: comments.length + 1, text: newComment, author: 'CurrentUser' }]);
      setNewComment('');
    }
  };

  return (
    <div className="post-page">
        <Header/>
      <div className="post-content">
        <h2>How Do You Recognize Someone Truly Intelligent?</h2>
        <p>There is only one characteristic that separates them from others.</p>
        <div className='authorDiv'>
          <div className='profileImg'></div>
          <div className='authorName'>
            <p>Author</p>
            </div>
            </div>
        <img src="https://via.placeholder.com/800x400" alt="Post" className="post-image" />
        <p className="post-text">
          This is the detailed content of the post. It can include text, images, and other multimedia content.
        </p>
        <div className="post-actions">
          <button onClick={handleLike}>Like ({likes})</button>
        </div>
      
      <div className="comments-section">
        <h3>Comments</h3>
        <ul className="comments-list">
          {comments.map((comment) => (
            <li key={comment.id} className="comment">
              <p className="comment-author">{comment.author}</p>
              <p className="comment-text">{comment.text}</p>
            </li>
          ))}
        </ul>
        <form onSubmit={handleCommentSubmit} className="comment-form">
          <input
            type="text"
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
            placeholder="Write a comment..."
          />
          <button type="submit">Post Comment</button>
        </form>
      </div>
      </div>
    </div>
  );
};

export default PostPage;
