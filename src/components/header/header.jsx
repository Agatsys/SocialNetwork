import React from 'react'
import { NavLink } from "react-router-dom";


const Header = (props) => {
    return (
    <header className="header">
        <div className="logo"></div>
        <div className='loginBlock__Header'>
            {props.isAuth
                ? props.login
                : <NavLink to={'/login'}>Login</NavLink> }
        </div>
    </header>
    )
}

export default Header;