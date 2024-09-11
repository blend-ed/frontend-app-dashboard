// import Header from "@blend-ed/frontend-component-vertical-navbar";
import SideNavbar, { SideNavbarContainer } from "../../../blendx-ui/src/SideNavbar";
import PageHeader from "../../../blendx-ui/src/PageHeader";
import { Outlet } from "react-router-dom";
import { getConfig } from '@edx/frontend-platform';

const DashboardIndex = () => {

    const user = {
        name: 'John Doe',
        email: 'john@doe.com',
        role: 'Admin',
        avatar: 'https://i.postimg.cc/7Z8vQ0Y9/Rectangle-2.png'
    }

    const StudentDashboardMenu = [

        {
            icon: 'home-2',
            text: 'Home',
            href: '/'
        },
        {
            icon: 'book',
            text: 'Courses',
            href: '/buttons'
        },
        {
            icon: 'settings',
            text: 'Settings',
            children: [
                {
                    text: 'Key Components',
                    href: '/key'
                },
                {
                    text: 'Icons',
                    href: '/icons'
                }
            ]
        }
    ]

    const StudentDashboardFooter = [
        {
            icon: 'settings',
            text: 'Settings',
            href: '/settings'
        },
        {
            icon: 'logout-box-r',
            text: 'Log Out',
            onClick: () => {
                console.log('Logging out')
            }
        }
    ]

    return (
        <div>
            <SideNavbarContainer>
                <SideNavbar logo={'https://i.postimg.cc/tTr1MbMr/logo-1-1.png'} logoTrademark={'https://i.postimg.cc/SNRLqTL2/logo-1.png'} collapsed={true} user={user} dashboardMenu={StudentDashboardMenu} dashboardFooter={StudentDashboardFooter} />
                <div className="content">
                    <PageHeader title="Dashboard" streakCount={3} mailCount={5} notificationCount={10} />
                    <Outlet />
                </div>
            </SideNavbarContainer>
        </div >
    )
}

export default DashboardIndex;