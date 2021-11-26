import React from 'react';
import Post from "./post/post";


const Posts = (props) => {

    let postElement = props.postsData.map((p) => <Post message={p.message} key={p.id} likesCount={p.likesCount} />);
    let newPostElement = React.createRef();

    let onAddPost = () => {
        props.addPost()
    }
    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.updataeNewPostText(text)
    }

    return (
        <div>
            <div>
                <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText} />
            </div>
            <div>
                <button onClick={onAddPost}>Send</button>
            </div>
            <button>Cancel</button>
            <div>
                {postElement}
            </div>
        </div>
    )
}

export default Posts;