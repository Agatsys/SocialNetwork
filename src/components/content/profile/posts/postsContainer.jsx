import { connect } from 'react-redux';
import { addPostActionCreator, updateNewPostTextActionCreator } from '../../../../redux/profile-reducer';
import Posts from './posts';


// const sPostsContainer = () => {
//     return <StoreContext.Consumer>
//         {(store) => {
//             let state = store.getState()

//             let addPost = () => {
//                 store.dispatch(addPostActionCreator());
//             }
//             let onPostChange = (text) => {
//                 let action = updateNewPostTextActionCreator(text)
//                 store.dispatch(action)
//             }

//             return <Posts
//                 updataeNewPostText={onPostChange}
//                 addPost={addPost}
//                 postsData={state.profilePage.postsData}
//                 newPostText={state.profilePage.newPostText} />
//         }
//         }
//     </StoreContext.Consumer>
// }

let mapStateToProps = (state) => {
    return {
        postsData: state.profilePage.postsData,
        newPostText: state.profilePage.newPostText
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        updataeNewPostText: (text) => {
            let action = updateNewPostTextActionCreator(text)
            dispatch(action)
        },
        addPost: () => {
            dispatch(addPostActionCreator());
        }
    }
}

const PostsContainer = connect(mapStateToProps, mapDispatchToProps)(Posts);

export default PostsContainer;