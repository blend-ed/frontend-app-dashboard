import React, { useEffect, useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { PageHeader, SideNavbar, SideNavbarContainer } from "@blend-ed/blendx-ui";
import { DashboardFooter, DashboardMenu, ProfileMenu } from "../routes/DashboardMenu";

const DashboardIndex = () => {
    const location = useLocation();
    const [title, setTitle] = useState("");

    const user = {
        name: 'John Doe',
        email: 'john@doe.com',
        role: 'Admin',
        image: 'https://i.postimg.cc/7Z8vQ0Y9/Rectangle-2.png'
    };

    useEffect(() => {
        const currentMenuItem = DashboardMenu.find(item => item.href === location.pathname);
        if (currentMenuItem) {
            setTitle(currentMenuItem.text);
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