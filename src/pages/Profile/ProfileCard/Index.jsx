import React from 'react';
import { Button, Badge } from "@blend-ed/blendx-ui"
import Avatar from "../../../blendx-ui/src/Avatar";
import profileBackgroundBanner from './profile-banner.jpeg'

const ProfileHeaderLarge = ({ name, username, backgroundSrc }) => {
    return (
        <div className="profile-header-large__container">
            {/* Background Image */}

            <img
                src={backgroundSrc || profileBackgroundBanner}
                alt="Profile background banner"
                className="profile-header-large__banner-img"
            />


            {/* Profile Information */}
            <div className="profile-header-large__info-wrapper">

                <div className="profile-header-large__left-section">
                    {/* Profile Picture */}
                    <div className="profile-header-large__avatar-wrapper">
                        <Avatar
                            size="huge"
                            alt='profile picture'
                            src="https://placehold.co/100x100"
                            type="dicebeer"
                            variant="gray"
                            userName={username}
                            className="profile-header-large__avatar"
                            border
                        />
                    </div>

                    {/* Profile Information */}
                    <div className="profile-header-large__info">
                        <span className="profile-header-large__name">{name}</span>
                        <div><span className="profile-header-large__username">{username}</span> <Badge size='sm'>Students</Badge></div>
                    </div>
                </div>
                <div className="profile-header-large__right-section">
                    <Button
                        size="md"
                        variant="outline-gray"
                        iconBefore="settings-5"
                        iconType="fill"
                    >
                        Account Settings
                    </Button>

                    <Button
                        size="md"
                        variant="primary"
                        iconBefore="edit"
                        iconType="fill"
                    >
                        Edit Profile
                    </Button>
                </div>

            </div>
        </div>
    );
};

export default ProfileHeaderLarge;