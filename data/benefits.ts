import { Benefit } from '../types/benefit';

export const BENEFITS: Benefit[] = [
  {
    image: {
      src: '/images/icon-online.svg',
      alt: 'Online Banking icon',
    },
    title: 'Online Banking',
    description:
      'Our modern web and mobile applications allow you to keep track of your finances wherever you are in the world.',
  },
  {
    image: {
      src: '/images/icon-budgeting.svg',
      alt: 'Simple Budgeting icon',
    },
    title: 'Simple Budgeting',
    description:
      "See exactly where your money goes each month. Receive notifications when you're close to hitting your limits.",
  },
  {
    image: {
      src: '/images/icon-onboarding.svg',
      alt: 'Fast Onboarding icon',
    },
    title: 'Fast Onboarding',
    description:
      "We don't do branches. Open your account in minutes online and start taking control of your finances right away.",
  },
  {
    image: {
      src: '/images/icon-api.svg',
      alt: 'Open API icon',
    },
    title: 'Open API',
    description:
      'Manage your savings, investments, pension, and much more from one account. Tracking your money has never been easier.',
  },
];
