export const MENUS = [
  {
    name: 'ABOUT',
    link: '/about',
    pathname: '/about',
  },
  {
    name: 'BRANDS',
    link: '/brands/',
    pathname: '/brands',
    pathname2: '/brands/[brand]',
  },
  {
    name: 'MAKEUP',
    link: '/makeup',
    pathname: '/makeup',
  },
  {
    name: 'COMMUNITY',
    link: '/community/contact',
    pathname: '/community/info/[section]',
    pathname2: '/community/contact',
  },
  {
    name: 'MY',
    link: '/my',
    pathname: '/my',
    pathname2: '/login',
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
    path: '/community/info/faq',
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

export const FOOTERDETAIL = [
  {
    title: 'Working Time',
    sub1: 'Monday-Saturday',
    sub3: '09:00-18:00',
    sub4: '09:00-11:00',
  },
  {
    title: 'Address',
    sub1: '198 West 21th street Suite',
    sub3: 'New York,NY 10010',
    sub4: 'Canada,CA 12210',
  },
  {
    title: 'Website Policies',
    sub1: 'Terms&Conditions',
    sub3: 'Privacy policy',
    sub4: 'Accessibility',
  },
  {
    title: 'Social',
    sub1: 'Instagram',
    sub3: 'Pinterest',
    sub4: 'Twitter',
  },
];
