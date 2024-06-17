import React, { useState, useEffect } from 'react';

const CreatePost = () => {
  const [formData, setFormData] = useState({
    title: '',
    contents: ''
  });

  const [currentUser, setCurrentUser] = useState('anonymous');

  useEffect(() => {
    const email = localStorage.getItem('currentUser');
    if (email) {
      setCurrentUser(email);
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const existingPosts = JSON.parse(localStorage.getItem('posts')) || [];
    const newId = existingPosts.length + 1;
    const newPost = { ...formData, id: newId, user: currentUser };
    existingPosts.push(newPost);
    localStorage.setItem('posts', JSON.stringify(existingPosts));
    setFormData({
      title: '',
      contents: ''
    });
    alert('Post saved successfully!');
  };

  return (
    <div className="container mt-5">
      <h2>Create a New Post</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            className="form-control"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="contents">Contents</label>
          <textarea
            className="form-control"
            id="contents"
            name="contents"
            value={formData.contents}
            onChange={handleChange}
            required
          ></textarea>
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
};

export default CreatePost;
