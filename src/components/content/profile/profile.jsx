import React from 'react'
import Preloader from '../../common/preloader/preloader';
import ProfileStatus from './profileStatus';


const Profile = (props) => {
    if (!props.profile) {
        return <Preloader />
    }

    return (
        <div>
            <div className='ava'>
                <img src={props.profile.photos.large} alt='shit...'/>
            </div>
            <div className='info'>
                <div className='heading'>
                    Max Payne
                </div>
                <ProfileStatus status={props.status} updateStatus={props.updateStatus}/>
            </div>
        </div>
    )
}

export default Profile;
