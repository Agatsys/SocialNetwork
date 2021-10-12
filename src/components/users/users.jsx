import axios from 'axios';
import React from 'react'
import { connect } from 'react-redux';
import { followAC, setUsersAC, unfollowAC } from '../../redux/users.reducer';
import userPhoto from '../../media/images/User.png'


let Users = (props) => {

    const getUsers = () => {
        if (props.users.length === 0) {
            axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => {
                debugger
                props.setUsers(response.data.items);
            });
        }
    }
    


    return (
        <div>
            <button onClick={getUsers}>Get users</button>
            {props.users.map(u => 
            <div key={u.id}>
                <span>
                    <div>
                        <img src={u.photos.small != null ? u.photos.small : userPhoto} className='userPhoto__Users'/>
                    </div>
                    <div>
                        {u.followed 
                            ? <button onClick={() => {props.unfollow(u.id)} }>Unfollow</button> 
                            : <button onClick={() => {props.follow(u.id)} }>Follow</button>
                        }
                    </div>
                </span>
                <span>
                    <span>
                        <div>{u.name}</div>
                        <div>{'u.status'}</div>
                    </span>
                    <span>
                        <div>{'u.location.country'}</div>
                        <div>{'u.location.city'}</div>
                    </span>    
                </span>
            </div>)}
        </div>
    )
}

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        follow: (userId) => {
            dispatch(followAC(userId))
        },
        unfollow: (userId) => {
            dispatch(unfollowAC(userId))
        },
        setUsers: (users) => {
            dispatch(setUsersAC(users))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Users);