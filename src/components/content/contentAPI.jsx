import axios from 'axios';
import React from 'react'
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { setUserProfile } from '../../redux/profile.reducer';
import ProfilePage from './content'


class ProfilePageAPI extends React.Component {
    
    componentDidMount() {
        let userId = this.props.match.params.userId
        if (!userId) {
            userId = 20252;
        }
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`).then(response => {
            this.props.setUserProfile(response.data);
        });
    }

    render () {
        return (
            <ProfilePage {...this.props} profile={this.props.profile}/>
        )
    } 
}

const mapStateToProps = (state) => ({
    profile: state.profilePage.profile
})
const mapDispatchToProps = {
    setUserProfile: setUserProfile
}

let withUrlDataContainerComponent = withRouter(ProfilePageAPI)

export default connect (mapStateToProps, mapDispatchToProps)(withUrlDataContainerComponent)