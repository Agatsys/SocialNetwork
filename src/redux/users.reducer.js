import { usersAPI } from "../api/api"


const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET-USERS'
const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE'
const SET_TOTAL_USER_COUNT = 'SET-TOTAL-USER-COUNT'
const TOGGLE_IS_FETCHING = 'TOGGLE-IS-FETCHING'
const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE-IS-FOLLOWING-PROGRESS'

export const followSuccesAC = (userId) => ({ type: FOLLOW, userId })
export const unfolloSucceswAC = (userId) => ({ type: UNFOLLOW, userId })
export const setUsersAC = (users) => ({ type: SET_USERS, users })
export const setCurrentPageAC = (currentPage) => ({ type: SET_CURRENT_PAGE, currentPage })
export const setTotalUsersCountAC = (totalUsersCount) => ({ type: SET_TOTAL_USER_COUNT, totalUsersCount })
export const toggleIsFetchingAC = (isFetching) => ({ type: TOGGLE_IS_FETCHING, isFetching })
export const toggleIsFollowingProgressAC = (followingInProgress, userId) => ({ type: TOGGLE_IS_FOLLOWING_PROGRESS, followingInProgress, userId })

export const getUsersThunkCreator = (currentPage, pageSize) => {
    return (dispatch) => {
        dispatch(toggleIsFetchingAC(true));
        usersAPI.getUsers(currentPage, pageSize).then(data => {
            dispatch(toggleIsFetchingAC(false));
            dispatch(setUsersAC(data.items));
            dispatch(setTotalUsersCountAC(data.totalCount));
        });
    }
}
export const onPageChangedThunkCreator = (pageNumber, pageSize) => {
    return (dispatch) => {
        dispatch(toggleIsFetchingAC(true));
        dispatch(setCurrentPageAC(pageNumber))
        usersAPI.getUsers(pageNumber, pageSize).then(data => {
            dispatch(toggleIsFetchingAC(false));
            dispatch(setUsersAC(data.items));
        });
    }
}
export const follow = (userId) => {
    return (dispatch) => {
        dispatch(toggleIsFollowingProgressAC(true, userId))
        usersAPI.follow(userId)
            .then(response => {
                if (response.data.resultCode === 0) {
                    dispatch(followSuccesAC(userId))
                }
                dispatch(toggleIsFollowingProgressAC(false, userId))
            });
    }
}
export const unfollow = (userId) => {
    return (dispatch) => {
        dispatch(toggleIsFollowingProgressAC(true, userId))
        usersAPI.unfollow(userId)
            .then(response => {
                if (response.data.resultCode === 0) {
                    dispatch(unfolloSucceswAC(userId))
                }
                dispatch(toggleIsFollowingProgressAC(false, userId))
            });
    }
}

let initialState = {
    users: [],
    pageSize: 5,
    totalUsersCount: 19,
    currentPage: 1,
    isFetching: false,
    followingInProgress: []
}

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return { ...u, followed: true }
                    }
                    return u;
                })
            }
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return { ...u, followed: false }
                    }
                    return u;
                })
            }
        case SET_USERS:
            return { ...state, users: action.users }
        case SET_CURRENT_PAGE:
            return { ...state, currentPage: action.currentPage }
        case SET_TOTAL_USER_COUNT:
            return { ...state, totalUsersCount: action.totalUsersCount }
        case TOGGLE_IS_FETCHING:
            return { ...state, isFetching: action.isFetching }
        case TOGGLE_IS_FOLLOWING_PROGRESS:
            return {
                ...state,
                followingInProgress: action.followingInProgress
                    ? [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter(id => id !== action.userId)
            }
        default:
            return state;
    }
}

export default usersReducer;