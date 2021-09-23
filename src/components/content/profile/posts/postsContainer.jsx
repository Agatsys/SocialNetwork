import React from 'react';
import { addPostActionCreator, updateNewPostTextActionCreator } from '../../../../redux/profile-reducer';
import StoreContext from '../../../../storeContext';
import Posts from './posts';


const PostsContainer = () => {
    return <StoreContext.Consumer>
        {(store) => {
            let state = store.getState()

            let addPost = () => {
                store.dispatch(addPostActionCreator());
            }
            let onPostChange = (text) => {
                let action = updateNewPostTextActionCreator(text)
                store.dispatch(action)
            }

            return <Posts
                updataeNewPostText={onPostChange}
                addPost={addPost}
                postsData={state.profilePage.postsData}
                newPostText={state.profilePage.newPostText} />
        }
        }
    </StoreContext.Consumer>
}

export default PostsContainer;