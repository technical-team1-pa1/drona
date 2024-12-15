import { INavData } from '@coreui/angular';

export const navItems: INavData[] = [
  {
    name: 'Dashboard',
    url: '/dashboard',
    iconComponent: { name: 'cil-speedometer' }
  },

   // Start Call ========================================================
   {
    name: 'Call',
    url: '/call/call',
    iconComponent: { name: 'cil-pencil' }
  },
  // End Call =======================================================

  // Start Analytics ========================================================
  {
    name: 'Analytics',
    url: '/analytics/analytics',
    iconComponent: { name: 'cil-pencil' }
  },
  // End Analytics =======================================================

   // Start Setting ========================================================
   {
    name: 'Setting',
    url: '/setting/setting',
    iconComponent: { name: 'cil-pencil' }
  },
  // End Setting =======================================================

     // Start Support ========================================================
     {
      name: 'Support',
      url: '/support/support',
      iconComponent: { name: 'cil-pencil' }
    },
    // End Support =======================================================

  {
    name: 'Pages',
    url: '/login',
    iconComponent: { name: 'cil-star' },
    children: [
      {
        name: 'Login',
        url: '/login',
        icon: 'nav-icon-bullet'
      },
      {
        name: 'Register',
        url: '/register',
        icon: 'nav-icon-bullet'
      },
    ]
  },
];
