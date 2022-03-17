export const MENUS = [
  {
    name: 'ABOUT',
    path: '/about',
  },
  {
    name: 'BRANDS',
    path: '/brands',
    path2: '/brands/[brand]',
  },
  {
    name: 'MAKEUP',
    path: '/makeup',
  },
  {
    name: 'COMMUNITY',
    path: '/community/contact',
    path2: '/community/[section]',
  },
  {
    name: 'MY',
    path: '/my',
    path2: '/login',
  },
];

export const BRANDS_PAGE = [
  { name: 'Clinique', path: '/brands/clinique' },
  { name: 'Benefit', path: '/brands/benefit' },
  { name: 'Misa', path: '/brands/misa' },
  { name: 'Stila', path: '/brands/stila' },
];

export const COMMUNITY_PAGE = [
  {
    name: 'Contact',
    path: '/community/contact',
  },
  {
    name: 'Info',
    path: '/community/info/',
    children: [
      {
        name: 'Faq',
        path: '/community/info/faq',
      },
      {
        name: 'Qna',
        path: '/community/info/qna',
      },
    ],
  },
];
