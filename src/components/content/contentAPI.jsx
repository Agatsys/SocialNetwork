import React from 'react'
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { compose } from 'redux';
//import { WithAuthRedirect } from '../../hoc/withAuthRedirect';
import { getStatus, getUserProfile, updateStatus } from '../../redux/profile.reducer';
import ProfilePage from './content'


class ProfilePageAPI extends React.Component {
    
    componentDidMount() {
        let userId = this.props.match.params.userId
        if (!userId) {
            userId = 20252;
        }
        this.props.getUserProfile(userId);
        setTimeout(() => {
            this.props.getUserStatus(userId)
        }, 1000);
    }

    render () {
        //if (!this.props.isAuth) return <Redirect to={'/login'}/>

        return (
            <ProfilePage 
                {...this.props} 
                profile={this.props.profile} 
                status={this.props.status} 
                updateStatus={this.props.updateStatus}/>
        )
    } 
}

const mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status
    //isAuth: state.auth.isAuth
})
const mapDispatchToProps = {
    getUserProfile: getUserProfile,
    getUserStatus: getStatus,
    updateStatus: updateStatus
}

//let withRedirect = WithAuthRedirect(ProfilePageAPI)

//let withUrlDataContainerComponent = withRouter(withRedirect)

//export default connect (mapStateToProps, mapDispatchToProps)(withUrlDataContainerComponent)

export default compose(
    connect (mapStateToProps, mapDispatchToProps),
    withRouter,
    //WithAuthRedirect
)(ProfilePageAPI)