const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET-USERS'

export const followAC = (userId) => ({ type: FOLLOW, userId })
export const unfollowAC = (userId) => ({ type: UNFOLLOW, userId })
export const setUsersAC = (users) => ({ type: SET_USERS, users })

let initialState = {
    users: [
        //{ id: 1, photoURL: 'https://bigpicture.ru/wp-content/uploads/2015/11/nophotoshop29.jpg', followed: true, fullname: "Sergiy", status: 'Kung Lao vins!', location: {city: 'Lviv', country: 'Ukraine'} },
        //{ id: 2, photoURL: 'https://bigpicture.ru/wp-content/uploads/2015/11/nophotoshop36.jpg', followed: true, fullname: "Vasil", status: 'Scorpion vins!', location: {city: 'Lviv', country: 'Ukraine'} },
        //{ id: 3, photoURL: 'https://bigpicture.ru/wp-content/uploads/2015/11/nophotoshop22.jpg', followed: false, fullname: "Max", status: 'i am a mentor of this two noobs', location: {city: 'Lviv', country: 'Ukraine'} },
    ],
}

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return { 
                ...state, 
                users: state.users.map( u => {
                    if (u.id === action.userId) {
                        return {...u, followed: true}
                    }
                    return u;
                } ) 
            }
        case UNFOLLOW:
            return { 
                ...state, 
                users: state.users.map( u => {
                    if (u.id === action.userId) {
                        return {...u, followed: false}
                    }
                    return u;
                } ) 
            }
        case SET_USERS:
            return { ...state, users: [...state.users, ...action.users] }
        default:
            return state;
    }
}

export default usersReducer;