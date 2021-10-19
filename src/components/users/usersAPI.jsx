import React from 'react'
import { connect } from 'react-redux';
import { followSuccesAC, getUsersThunkCreator, onPageChangedThunkCreator, toggleIsFollowingProgressAC, unfolloSucceswAC } from '../../redux/users.reducer';
import Users from './users';
import Preloader from '../common/preloader/preloader';
//import { WithAuthRedirect } from '../../hoc/withAuthRedirect';
import { compose } from 'redux';


class UsersAPI extends React.Component {
    componentDidMount() {
        this.props.getUsersTC(this.props.currentPage, this.props.pageSize)
    }
    onPageChanged = (pageNumber) => {
        this.props.onPageChangedTC(pageNumber, this.props.pageSize)
    }

    render() {
        return (
            <>
                {this.props.isFetching
                    ? <Preloader />
                    : <Users
                        totalUsersCount={this.props.totalUsersCount}
                        pageSize={this.props.pageSize}
                        currentPage={this.props.currentPage}
                        onPageChanged={this.onPageChanged}
                        users={this.props.users}
                        follow={this.props.follow}
                        unfollow={this.props.unfollow}
                        followingImProgress={this.props.followingImProgress}

                    />
                }
            </>
        )
    }
}

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingImProgress: state.usersPage.followingInProgress
    }
}
let mapDispatchToProps = {
    follow: followSuccesAC,
    unfollow: unfolloSucceswAC,
    toggleIsFollowingProgress: toggleIsFollowingProgressAC,
    getUsersTC: getUsersThunkCreator,
    onPageChangedTC: onPageChangedThunkCreator
}

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    //WithAuthRedirect
)(UsersAPI)