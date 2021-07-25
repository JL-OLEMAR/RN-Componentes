import MenuItem from '../interfaces/appInterface'

export const menuItems: MenuItem[] = [
  {
    name: 'Animation 101',
    icon: 'cube-outline',
    component: 'Animation101Screen'
  },
  {
    name: 'Animation 102',
    icon: 'albums-outline',
    component: 'Animation102Screen'
  },
  {
    name: 'Switchs',
    icon: 'toggle',
    component: 'SwitchScreen'
  },
  {
    name: 'Alerts',
    icon: 'alert-circle-outline',
    component: 'AlertScreen'
  },
  {
    name: 'TextInputs',
    icon: 'document-text-outline',
    component: 'TextInputScreen'
  },
  {
    name: 'Pull to Refresh',
    icon: 'refresh-outline',
    component: 'PullToRefreshScreen'
  },
  {
    name: 'Section List',
    icon: 'list-outline',
    component: 'SectionListScreen'
  },
  {
    name: 'Modal',
    icon: 'copy-outline',
    component: 'ModalScreen'
  },
  {
    name: 'Infinite Scroll',
    icon: 'download-outline',
    component: 'InfiniteScrollScreen'
  },
  {
    name: 'Slides',
    icon: 'flower-outline',
    component: 'SlideScreen'
  },
  {
    name: 'Themes',
    icon: 'flask-outline',
    component: 'ChangeThemeScreen'
  }
]