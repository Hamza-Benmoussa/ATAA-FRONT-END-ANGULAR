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
        label: 'list-utilisateurs',
        link: '/utilisateur/list-utilisateur',
      },
      {
        label: 'add-utilisateur',
        link: '/utilisateur/add-utilisateur',
      }
    ]
  },
  {
    label: 'Members',
    icon: 'users',
    subItems: [
      {
        label: 'list-members',
        link: '/members/list-member',
      },
      {
        label: 'add-members',
        link: '/members/add-member',
      },
    ]
  },
  {
    label : 'Dowars',
    icon: 'map-pin',
    subItems: [
      {
        label: 'list-dowars',
        link: '/dowar/list-dowar',
      },
      {
        label: 'add-dowar',
        link: '/dowar/add-dowar',
      }
    ]
  },
  {
    /* label: 'Charts & graphs'*/ label : 'villes',
    icon: 'map',
    subItems: [
      {
        label: 'list-villes',
        link: '/ville/list-ville',
      },
      {
        label: 'add-ville',
        link: '/ville/add-ville',
      },
    ]
  },
  {
    label : 'charts & graphs',
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
        label: 'list-bien-essentiel',
        link: '/biens-essentiel/list-bien',
      },
      {
        label: 'add-bien-essentiel',
        link: '/biens-essentiel/add-bien',
      },
    ]
  },
  {
    label: 'Association',
    icon: 'database',
    subItems: [

      {
        label: 'list-associations',
        link: '/association/list-association',
      },
      {
        label: 'add-associations',
        link: '/association/add-association',
      },

    ]
  },
  {
    label: 'Kafila',
    icon: 'truck',
    subItems: [

      {
        label: 'list-kafila',
        link: '/kafila/list-kafila',
      },
      {
        label: 'add-kafila',
        link: '/kafila/add-kafila',
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
