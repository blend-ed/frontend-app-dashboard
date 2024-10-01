import { Button, Dropdown, Form, TextInput } from '@blend-ed/blendx-ui'
import React from 'react'
import ProfileCardLarge from '../../../components/ProfileCardLarge'



function ProfileDetails() {
    return (
        <>
            <div className='settings__profile-card-large'>
                <ProfileCardLarge name="Abdul Ahad" username="abdulahad123" backgroundSrc={""} state="edit-profile" />
            </div>
            <Form className='settings__profile-form-input'>
                <div className="settings__profile-input-div">
                    <span htmlFor="name" className='settings__profile-input-label' >Name</span>
                    <TextInput id="name" placeholder="Enter Name" />
                </div>
                <div className="settings__profile-input-div">
                    <span htmlFor="name" className='settings__profile-input-label' >Phone</span>
                    <TextInput id="name" placeholder="Enter Phone Number" />
                </div>
                <div className="settings__profile-input-div">
                    <span htmlFor="name" className='settings__profile-input-label' >Email</span>
                    <TextInput id="name" placeholder="Enter Email" />
                </div>
                <div className="settings__profile-input-div">
                    <span htmlFor="name" className='settings__profile-input-label' >Year Of Birth</span>
                    <TextInput.Date id="name" placeholder="Name" />
                </div>
                <div className="settings__profile-input-div">
                    <label htmlFor="name" className='settings__profile-input-label' >Gender</label>
                    <Dropdown
                        size="sm"
                        placeholder="Select"
                        state="default"
                        onClick={(e) => { console.log(e) }}
                    >
                        <Dropdown.Item label="Male" sublabel="Male" />
                        <Dropdown.Item label="Female" sublabel="Female" />
                    </Dropdown>

                </div>
                <div className="settings__profile-input-div">
                    <span htmlFor="name" className='settings__profile-input-label' >Country</span>
                    <Dropdown
                        size="sm"
                        placeholder="Select an option"
                        state="default"
                        onClick={(e) => { console.log(e) }}
                    >
                        <Dropdown.Item label="India" sublabel="India" />
                        <Dropdown.Item label="Pakistan" sublabel="Pakistan" />
                        <Dropdown.Item label="Bangladesh" sublabel="Bangladesh" />
                        <Dropdown.Item label="USA" sublabel="USA" />
                        <Dropdown.Item label="UK" sublabel="UK" />
                        <Dropdown.Item label="Australia" sublabel="Australia" />

                    </Dropdown>
                </div>
                <div className="settings__profile-footer-div">
                    <Button size="xs" variant="outline-gray">Cancel</Button>
                    <Button size="xs">Save</Button>
                </div>
            </Form>
        </>

    )
}

export default ProfileDetails