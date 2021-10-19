import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router";


export const WithAuthRedirect = (Component) => {
    class RedirectComponent extends React.Component {
        render() {
            if (!this.props.isAuth) return <Redirect to={'/login'}/>
            return <Component {...this.props}/>
        }
    }
    return RedirectComponent;
}

let mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
})
export default connect(mapStateToProps, null)(WithAuthRedirect);
