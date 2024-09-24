import { useState } from 'react'
import { TabMenu } from '@blend-ed/blendx-ui'
import ProfileDetails from './profile-details'
function Settings() {
  const [activeTab, setActiveTab] = useState('Profile Details')

  return (
    <main className='settings-container'>
      <div className="settings__header">
        <TabMenu>
          <TabMenu.Item label="Profile Details" active={activeTab === "Profile Details"} onClick={() => { setActiveTab("Profile Details") }} />
          <TabMenu.Item label="Billing" active={activeTab === "Billing"} onClick={() => { setActiveTab("Billing") }} />
          <TabMenu.Item label="Preferences" active={activeTab === "Preferences"} onClick={() => { setActiveTab("Preferences") }} />
        </TabMenu>
      </div>

      <ProfileDetails />

    </main>
  )
}

export default Settings