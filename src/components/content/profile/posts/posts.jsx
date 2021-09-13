import React from 'react';
import Post from "./post/post";


class Posts extends React.Component {

    newPostElement = React.createRef();

    addPost = () => {
        this.props.dispatch({type: 'ADD-POST'});
        //this.props.updateNewPostText('');
    }
    onPostChange = () => {
        let text = this.newPostElement.current.value;
        this.props.dispatch({type: 'UPDATE-NEW-POST-TEXT', newText: text});
    }

    render() {
        const postElement = this.props.postsData.map((p) => <Post message={p.message} likesCount={p.likesCount} />);
        return (
            <div>
                <div>
                    <textarea onChange={this.onPostChange} ref={this.newPostElement} value={this.props.newPostText} />
                </div>
                <div>
                    <button onClick={this.addPost}>Send</button>
                </div>
                <button>Cancel</button>
                <div>
                    {postElement}
                </div>
            </div>
        )
    }
}

export default Posts;