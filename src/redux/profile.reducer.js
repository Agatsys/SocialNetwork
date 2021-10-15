const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'
const SET_USER_PROFILE = 'SET-USER-PROFILE'

export const addPostActionCreator = () => ({ type: ADD_POST })
export const updateNewPostTextActionCreator = (text) => ({ type: UPDATE_NEW_POST_TEXT, newText: text })
export const setUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile})

let initialState = {
    postsData: [
        { id: 1, message: "It's my first post", likesCount: 10 },
        { id: 2, message: "Мушу написати щось важливе", likesCount: 12 },
        { id: 3, message: "Жартую. Не мушу", likesCount: 25 },
        { id: 4, message: "Bla bla bla", likesCount: 4 },
    ],
    newPostText: '',
    profile: null
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: 
            let newPost = {
                id: 5,
                message: state.newPostText,
                likesCount: 0 };
            return {
                ...state,
                postsData: [...state.postsData, newPost],
                newPostText: '' };
        case UPDATE_NEW_POST_TEXT: 
            return {
                ...state,
                newPostText: action.newText };
        case SET_USER_PROFILE:
            return {
                ...state,
                profile: action.profile
            }
        default:
            return state;
    }
}

export default profileReducer;