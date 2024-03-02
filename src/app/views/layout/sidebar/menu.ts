import { MenuItem } from './menu.model';

export const MENU: MenuItem[] = [
  {
    label: 'Main',
    isTitle: true
  },
  {
    label: 'Dashboard',
    icon: 'home',
    link: '/dashboard'
  },

  {
    label: 'Management',
    isTitle: true
  },
  {
    label: 'Utilisateur',
    icon: 'user',
    subItems: [
      {
        label: 'list-utilisateur',
        link: '/utilisateur/list-utilisateur',
      },
      {
        label: 'add-utilisateur',
        link: '/utilisateur/add-utilisateur',
      },
      {
        label: 'update-utilisateur',
        link: '/utilisateur/update-utilisateur',
      }
    ]
  },
  {
    label: 'Members',
    icon: 'users',
    subItems: [
      {
        label: 'Cropper',
        link: '/advanced-ui/cropper',
      },
    ]
  },
  {
    /*label: 'Forms'*/label : 'Dowars',
    icon: 'map-pin',
    subItems: [
      {
        label: 'Basic elements',
        link: '/form-elements/basic-elements'
      },
    ]
  },
  {
    /* label: 'Charts & graphs'*/ label : 'villes',
    icon: 'map',
    subItems: [
      {
        label: 'ApexCharts',
        link: '/charts-graphs/apexcharts',
      },
      {
        label: 'ChartJs',
        link: '/charts-graphs/chartjs',
      },
    ]
  },
  {
    label: 'Biens-Essentiels',
    icon: 'shopping-bag',
    subItems: [

      {
        label: 'Data table',
        link: '/tables/data-table',
      },

    ]
  },
  {
    label: 'Association',
    icon: 'database',
    subItems: [

      {
        label: 'Data table',
        link: '/tables/data-table',
      },

    ]
  },
  {
    label: 'Kafila',
    icon: 'truck',
    subItems: [

      {
        label: 'Data table',
        link: '/tables/data-table',
      },

    ]
  },
  {
    label: 'Pages',
    isTitle: true
  },
  {
    label: 'Special pages',
    icon: 'book',
    subItems: [
      {
        label: 'Faq',
        link: '/general/faq',
      },

      {
        label: 'Profile',
        link: '/general/profile',
      },
      {
        label: 'Timeline',
        link: '/general/timeline',
      }
    ]
  },
  {
    label: 'Authentication',
    icon: 'unlock',
    subItems: [
      {
        label: 'Login',
        link: '/auth/login',
      },
      {
        label: 'Register',
        link: '/auth/register',
      },
    ]
  },
  {
    label: 'Error',
    icon: 'cloud-off',
    subItems: [
      {
        label: '404',
        link: '/error/404',
      },
      {
        label: '500',
        link: '/error/500',
      },
    ]
  },
];
