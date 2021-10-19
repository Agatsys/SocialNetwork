import React from 'react'
import { connect } from 'react-redux';
import { getAuthUserData } from '../../redux/auth.reducer';
import Header from './header'


class HeaderAPI extends React.Component {

    componentDidMount() {
        this.props.getAuthUserData()
    }

    render() {
        return (
            <Header {...this.props} />
        )
    }
}

let mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login
})
let mapDispatchToProps = {
    getAuthUserData: getAuthUserData
}

export default connect(mapStateToProps, mapDispatchToProps)(HeaderAPI)