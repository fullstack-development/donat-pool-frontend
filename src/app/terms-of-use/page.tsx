import type { Metadata } from 'next';

import { Layout } from '@/shared/components';
import { APP_URL, ROUTES } from '@/shared/constants';

import { terms } from './data';
import styles from './styles.module.css';

const metadata: Metadata = {
  title: 'Terms of use',
  description: 'Transparent and simple terms of using our platform.',
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
    'terms',
  ],
  openGraph: {
    title: 'Donat.Pool: Terms of use',
    description: 'Transparent and simple terms of using our platform.',
    url: `${APP_URL}${ROUTES.termsOfUse}`,
  },
};

function Page() {
  return (
    <Layout>
      <div className="mx-auto max-w-[52.375rem]">
        <h1 className="mb-8 font-rammetto-one text-menu-active text-red max-md:text-[2.25rem]/[2.25rem]">
          Donat.Pool <span className="text-green">Terms of Use</span>
        </h1>
        <p className="mb-8">
          Your access and use of the Donat.Pool Services constitutes your agreement to be bound by these Terms.
        </p>
        <ol className={`${styles.list} list-inside space-y-3`}>
          {terms.map(({ term, subTerms }) => (
            <li className="text-2xl" key={term}>
              {term}
              <ol className="mt-1 list-inside space-y-1 pl-5">
                {subTerms.map((subTerm) => (
                  <li className="text-base" key={subTerm}>
                    {subTerm}
                  </li>
                ))}
              </ol>
            </li>
          ))}
        </ol>
      </div>
    </Layout>
  );
}

export { Page as default, metadata };
