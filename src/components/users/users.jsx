import React from 'react'
import { NavLink } from 'react-router-dom';
import userPhoto from '../../media/images/User.png'


const Users = (props) => {

    const pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)

    const pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    return (
        <div>
            <div>
                {pages.map( (p, index) => <span className={props.currentPage === p ? 'selectedPage__Users' : undefined} key={index}
                    onClick={() => props.onPageChanged(p)}>{p}</span>)}
            </div>
            {props.users.map(u =>
                <div key={u.id}>
                    <span>
                        <div>
                            <NavLink to={'/profile/' + u.id}>
                                <img src={u.photos.small != null ? u.photos.small : userPhoto} className='userPhoto__Users' alt='Oh, shit...' />
                            </NavLink>
                        </div>
                        <div>
                            {u.followed
                                ? <button 
                                    disabled={props.followingImProgress.some(id => id === u.id)} 
                                    onClick={() => {props.follow(u.id)}
                                    }>Unfollow</button>
                                : <button 
                                    disabled={props.followingImProgress.some(id => id === u.id)} 
                                    onClick={() => {props.unfollow(u.id)}  
                                    }>Follow</button>
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

export default Users;