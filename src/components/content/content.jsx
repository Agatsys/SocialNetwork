import PostsContainer from './profile/posts/postsContainer';
import Profile from './profile/profile';


const ProfilePage = (props) => {
    return (
        <div className='content'>
            <Profile profile={props.profile} status={props.status} updateStatus={props.updateStatus}/>
            <PostsContainer />
        </div>
    )
}

export default ProfilePage;