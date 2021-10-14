import PostsContainer from './profile/posts/postsContainer';
import Profile from './profile/profile';


const ProfilePage = (props) => {
    return (
        <div className='content'>
            <Profile />
            <PostsContainer />
        </div>
    )
}

export default ProfilePage;