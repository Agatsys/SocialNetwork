const Post = (props) => {
    return (
        <div>
            <div>
                {props.message}, {props.likesCount}
            </div>
        </div>
     )
}

export default Post;