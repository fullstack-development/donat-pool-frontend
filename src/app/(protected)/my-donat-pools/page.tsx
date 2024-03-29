import type { Metadata } from 'next';

import { MyDonatPools } from '@/containers';
import { APP_URL, ROUTES } from '@/shared/constants';

const metadata: Metadata = {
  title: 'My Donat.Pools',
  description: 'List of all your projects. Share and manage them.',
  keywords: [
    'crowdfunding',
    'donation',
    'donations',
    'support',
    'community',
    'startup',
    'startups',
    'ideas',
    'funding',
    'funds',
    'faq',
    'projects',
  ],
  openGraph: {
    title: 'Donat.Pool: My Donat.Pools',
    description: 'List of all your projects. Share and manage them.',
    url: `${APP_URL}${ROUTES.myDonatPools}`,
  },
};

function Page() {
  return <MyDonatPools />;
}

export { Page as default, metadata };
