import Posts from './profile/posts/posts';
import Profile from './profile/profile';

const ProfilePage = (props) => {
    return (
        <div className='content'>
            <Profile />
            <Posts postsData={props.data.postsData} 
                   newPostText={props.data.newPostText} 
                   updateNewPostText={props.updateNewPostText}
                   addPost={props.addPost} />
        </div>
    )
}

export default ProfilePage;