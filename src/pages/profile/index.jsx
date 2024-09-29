import React from 'react'
import ProfileCardLarge from '../../components/ProfileCardLarge';
import ProgressCard from '../../components/ProgressCard';
import ProfileFooterSection from './certificates-section';

function Profile() {
    return (
        <main>
            <ProfileCardLarge name="Abdul Ahad" username="abdulahad123" backgroundSrc={""} />
            <ProgressCard />
            <ProfileFooterSection />
        </main>
    )
}

export default Profile