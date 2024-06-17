import React, { useState, useEffect } from 'react';

const BlogPost = ({ match }) => {
  const postId = match.params.id;
  const [post, setPost] = useState(null);

  useEffect(() => {
    const storedPosts = JSON.parse(localStorage.getItem('posts')) || [];
    const selectedPost = storedPosts.find(p => p.id === parseInt(postId));
    setPost(selectedPost);
  }, [postId]);
//tady jsem nevedel protoze tady jsem lehce ztracej
  return (
    <div className="container mt-5">
      <h2>Blog Post Details</h2>
      {post ? (
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">{post.title}</h5>
            <p className="card-text">{`Posted by: ${post.user}`}</p>
            <p className="card-text">{post.contents}</p>
          </div>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default BlogPost;
