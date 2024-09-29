
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

export { DashboardMenu, DashboardFooter, ProfileMenu }