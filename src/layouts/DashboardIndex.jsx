import React, { useEffect, useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { SideNavbar, SideNavbarContainer } from "@blend-ed/blendx-ui";
import { PageHeader } from "../blendx-ui/src";
import { DashboardFooter, DashboardMenu, ProfileMenu } from "../routes/DashboardMenu";
import { getAuthenticatedUser } from "@edx/frontend-platform/auth";


const DashboardIndex = () => {
    const location = useLocation();
    const [title, setTitle] = useState("");

    const user = {
        name: getAuthenticatedUser().name,
        email: getAuthenticatedUser().email,
        role: getAuthenticatedUser().roles?.[0] || 'Student',
        image: 'https://i.postimg.cc/7Z8vQ0Y9/Rectangle-2.png'
    };

    // get the time of the day, like morning, afternoon, evening
    const timeOfDay = (() => {
        const currentTime = new Date().getHours();
        if (currentTime < 12) {
            return 'morning';
        }
        if (currentTime < 18) {
            return 'afternoon';
        }
        return 'evening';
    });

    useEffect(() => {
        const currentMenuItem = DashboardMenu.find(item => item.href === location.pathname);
        if (currentMenuItem) {
            if (currentMenuItem.text === 'Home') {
                setTitle(`Good ${timeOfDay()}, ${user.name}`);
            }
            else {
                setTitle(currentMenuItem.text);
            }
        }
    }, [location.pathname]);


    return (
        <SideNavbarContainer>
            <SideNavbar
                logo={'https://i.postimg.cc/tTr1MbMr/logo-1-1.png'}
                logoTrademark={'https://i.postimg.cc/SNRLqTL2/logo-1.png'}
                collapsed={false}
                user={user}
                dashboardMenu={DashboardMenu}
                dashboardFooter={DashboardFooter}
                profileMenu={ProfileMenu}
            />
            <div className="content">
                <PageHeader
                    title={title}
                    streakCount={3}
                    mailCount={5}
                    notificationCount={10}
                />
                <Outlet />
            </div>
        </SideNavbarContainer>
    );
};

export default DashboardIndex;