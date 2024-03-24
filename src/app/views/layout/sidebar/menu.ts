import { MenuItem } from './menu.model';

export const MENU: MenuItem[] = [
  {
    label: 'Main',
    isTitle: true,
    roles: ['PresidantAssociation','AdminApp'],
  },
  {
    label: 'Dashboard',
    icon: 'home',
    roles: ['PresidantAssociation','AdminApp'],
    link: '/dashboard'
  },

  {
    label: 'Management',
    isTitle: true,
    roles: ['PresidantAssociation','AdminApp'],
  },
  {
    label: 'Utilisateur',
    icon: 'user',
    roles: ['AdminApp'],
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
    roles: ['PresidantAssociation'],
    subItems: [
      {
        label: 'list-members',
        link: '/member/list-member',
      },
      {
        label: 'add-members',
        link: '/member/add-member',
      },
    ]
  },
    {
      label : 'Dowars',
      icon: 'map-pin',
      roles: ['AdminApp'],
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
label : 'villes-dowars',
    icon: 'map',
    roles: ['PresidantAssociation'],
    subItems: [
      {
        label: 'list-villes-dowars',
        link: '/vil-dow/list-vd',
      },
    ]
  },
  {
   label : 'villes',
    icon: 'map',
    roles: ['AdminApp'],
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
    roles: ['PresidantAssociation','AdminApp'],
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
    roles: ['PresidantAssociation'],
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
    roles: ['AdminApp'],
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
    roles: ['PresidantAssociation'],
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
    isTitle: true,
    roles: ['PresidantAssociation','AdminApp'],
  },
  {
    label: 'Special pages',
    icon: 'book',
    roles: ['PresidantAssociation','AdminApp'],
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
    roles: ['PresidantAssociation','AdminApp'],
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
    roles: ['PresidantAssociation','AdminApp'],
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
