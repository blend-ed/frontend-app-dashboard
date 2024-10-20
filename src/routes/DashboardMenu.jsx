// import { getConfig } from "../frontend-platform/src"
import { getConfig, ensureConfig } from "@edx/frontend-platform"

const getDashboardMenu = () => {
  ensureConfig(['LMS_BASE_URL', 'DASHBOARD_URL', 'STAFF_DASHBOARD_URL'])
  const { LMS_BASE_URL, DASHBOARD_URL, STAFF_DASHBOARD_URL } = getConfig()

  const DashboardMenu = [
    {
      icon: 'home-2',
      text: 'Home',
      href: '/'
    },
    {
      icon: 'search',
      text: 'Discover',
      children: [
        {
          text: 'All',
          href: '/discover'
        },
        {
          text: 'Wishlist',
          href: '/wishlist'
        },
        {
          text: 'Popular',
          href: '/discover/popular'
        },
      ]
    },
    {
      icon: 'lightbulb',
      text: 'My Learning',
      children: [
        {
          text: 'Course',
          href: '/course'
        },
        {
          text: 'Notes',
          href: '/notes'
        },
        {
          text: 'Bookmarks',
          href: '/bookmarks'
        },
      ]
    },
    {
      icon: 'progress-6',
      text: 'Progress',
      href: '/progress'
    },
    {
      icon: 'calendar-event',
      text: 'Schedule',
      href: '/calendar'
    },
    {
      icon: 'chat-quote',
      text: 'Discussion',
      href: '/discussion'
    }
  ]

  const DashboardFooter = [
    {
      icon: 'settings-3',
      text: 'Settings',
      href: '/settings'
    },
  ]

  const ProfileMenu = [
    {
      text: 'Staff Dashboard',
      href: STAFF_DASHBOARD_URL
    },
    {
      text: 'My cart',
      href: '/cart'
    },
    {
      text: 'My purchases',
      href: '/purchases'
    },
    {
      text: 'Help & Support',
      href: '/help'
    },
    {
      text: 'Log out',
      onClick: () => {
        console.log('Logging out...')
      }
    }
  ]

  return { DashboardMenu, DashboardFooter, ProfileMenu }
}

export default getDashboardMenu