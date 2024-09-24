import React from 'react'
import ProfileCardLarge from '../../../components/ProfileCardLarge'


function ProfileDetails() {
    return (
        <div className='settings__profile-card-large'>
            <ProfileCardLarge name="Abdul Ahad" username="abdulahad123" backgroundSrc={""} state="edit-profile" />
        </div>
    )
}

export default ProfileDetails