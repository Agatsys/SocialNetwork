import axios from 'axios';
import React from 'react'
import { connect } from 'react-redux';
import { setAuthUserData } from '../../redux/auth.reducer';
import Header from './header'


class HeaderAPI extends React.Component {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {withCredentials: true})
        .then(response => {
            if (response.data.resultCode === 0) {
                let {id, email, login} = response.data.data;
                this.props.setAuthUserData(id, email, login)
            }
        });
        
    }

    render() {
        return (
            <Header {...this.props}/>
        )
    }
}

let mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login
})
let mapDispatchToProps = {
    setAuthUserData: setAuthUserData
}

export default connect (mapStateToProps, mapDispatchToProps)(HeaderAPI)