import React, { useState } from 'react';

const EditPostForm = ({ post, handleEditPost, handleCancelEdit }) => {
    const [editedPost, setEditedPost] = useState(post);

    const handleSubmit = (event) => {
        event.preventDefault();
        handleEditPost(editedPost);
    };

    const handleChange = (event) => {
        const { name, value } = event.target;
        setEditedPost({ ...editedPost, [name]: value });
    };

    return (
        <div>
            <h2>Edit Post</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="editTitle">Title : </label>
                    <input
                        type="text"
                        id="editTitle"
                        name="title"
                        value={editedPost.title}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label htmlFor="editContent">Content : </label>
                    <input
                        type="text"
                        id="editContent"
                        name="content"
                        value={editedPost.content}
                        onChange={handleChange}
                    />
                </div>
                
                <button type="submit">Save</button>
                <button onClick={handleCancelEdit}>Cancel</button>
            </form>
        </div>
    );
};

export default EditPostForm;
