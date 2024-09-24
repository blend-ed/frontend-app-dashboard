import { useState } from 'react'
import { TabMenu } from '@blend-ed/blendx-ui'

function ProfileFooterSection() {
  const [activeTab, setActiveTab] = useState('Certificates')

  return (
    <div className='profile-footer-section__container'>
      <TabMenu>
        <TabMenu.Item label="Certificates" active={activeTab === "Certificates"} onClick={() => { setActiveTab("Certificates") }} />
        <TabMenu.Item label="Badges" active={activeTab === "Badges"} onClick={() => { setActiveTab("Badges") }} />
      </TabMenu>

      <div className='profile-footer-section__content'>
        {activeTab === "Certificates" && (
          <div className="profile-footer-section__certificates-row">
            <img src="https://placehold.co/350x222" alt="certificate of student" className='profile-footer-section__certificate-image' />
            <img src="https://placehold.co/350x222" alt="certificate of student" className='profile-footer-section__certificate-image' />
            <img src="https://placehold.co/350x222" alt="certificate of student" className='profile-footer-section__certificate-image' />
          </div>
        )}
        {activeTab === "Badges" && (
          <div>
            <p>coming soon</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default ProfileFooterSection