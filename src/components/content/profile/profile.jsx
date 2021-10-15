import React from 'react'
import Preloader from '../../common/preloader/preloader';


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
            </div>
        </div>
    )
}

export default Profile;
