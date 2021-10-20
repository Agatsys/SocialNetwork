import { NavLink } from 'react-router-dom';


const Navigation = () => {
    return (
        <nav className='nav'>
            <NavLink to="/profile" activeClassName='active'>Профіль</NavLink>
            <NavLink to="/dialogs" activeClassName='active'>Повідомлення</NavLink>
            <NavLink to="/users" activeClassName='active'>Юзери</NavLink>
            <NavLink to='/music' activeClassName='active'>Музика</NavLink>
            <NavLink to='/settings' activeClassName='active'>Налаштування</NavLink>
        </nav>
    )
}

export default Navigation;