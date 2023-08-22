import { usePathname } from 'next/navigation';
import { PropsWithChildren, useEffect } from 'react';

import { Footer, Header } from '@/shared/components';
import { useGetAppInfo } from '@/shared/hooks';
import { useDonatPool } from '@/shared/hooks';

const Common = ({ children }: PropsWithChildren) => {
  const pathname = usePathname();

  const getAppInfo = useGetAppInfo();
  const offchain = useDonatPool();

  useEffect(() => {
    if (offchain) {
      getAppInfo();
    }
  }, [offchain]);

  return (
    <div className="flex min-h-screen flex-col">
      <Header currentPage={pathname} />
      <main className="base-wrapper grow">
        <div className="max-w-480 mx-0 mb-40 mt-20 w-full max-sm:mx-0 max-sm:mb-15 max-sm:mt-10">{children}</div>
      </main>
      <Footer />
    </div>
  );
};

export { Common };
