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
  { name: 'clinique', path: '/brands/clinique' },
  { name: 'benefit', path: '/brands/benefit' },
  { name: 'misa', path: '/brands/misa' },
  { name: 'stila', path: '/brands/stila' },

  ,
];

export const COMMUNITY_PAGE = [
  {
    name: 'contact',
    path: '/community/contact',
  },
  {
    name: 'info',
    path: '/community/info/',
    children: [
      {
        name: 'faq',
        path: '/community/info/faq',
      },
      {
        name: 'qna',
        path: '/community/info/qna',
      },
    ],
  },
];

export const HOMEPICS = [
  {
    src: '/img/main2.jpg',
    name: 'SKIN CARE',
  },
  { src: '/img/main3.jpg', name: 'BODY CARE' },
  { src: '/img/main4.jpg', name: 'HAIR CARE' },
];
