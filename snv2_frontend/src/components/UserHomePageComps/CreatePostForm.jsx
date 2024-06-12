import React from 'react';

const CreatePostForm = ({ newPost, handleCreatePost, titleOnChange, contentOnChange, handleCancelCreate}) => {
    
    return (
        <div>
            <h2>Create Post</h2>
            <form onSubmit={handleCreatePost}>
                <label htmlFor="title">Title: </label>
                <input
                    type="text"
                    id="title"
                    rows="1"
                    value={newPost.title}
                    onChange={titleOnChange}
                />
                <label htmlFor="content"> Content: </label>
                <input
                    type="text"
                    id="content"
                    rows="1"
                    value={newPost.content}
                    onChange={contentOnChange}
                />
                <button type="submit">Create Post</button>
                <button onClick={handleCancelCreate}>Cancel</button>
            </form>
        </div>
    )
}

export default CreatePostForm;
