// import React from 'react';
// import LikeButton from './LikeButton';
// import CommentSection from './CommentSection';
// import FollowButton from './FollowButton';
// import { Link } from 'react-router-dom';
// import './Post.css';

// const Post = ({ post }) => {
//   return (
//     <div className="post">
//       <div className="post-header">
//         <Link to={`/profile/${post.author}`}>{post.author}</Link>
//         <FollowButton />
//       </div>
//       <div className="post-content">
//         {post.type === 'gif' ? (
//           <img src={post.content} alt="GIF" />
//         ) : (
//           <p>{post.content}</p>
//         )}
//       </div>
//       <div className="post-actions">
//         <LikeButton />
//       </div>
//       <CommentSection comments={post.comments} />
//     </div>
//   );
// };

// export default Post;
