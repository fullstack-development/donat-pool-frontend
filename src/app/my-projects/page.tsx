'use client';

import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

import { Common } from '@/layouts';
import { MyProjects } from '@/shared/components';
import { ROUTES } from '@/shared/constants';
import { useAuthGuard } from '@/shared/hooks';
import { useAppSelector } from '@/store/hooks';

const Page = () => {
  useAuthGuard();
  const router = useRouter();
  const connectWalletStatus = useAppSelector((state) => state.connectWallet.requestStatus);

  useEffect(() => {
    document.title = 'My projects';
  }, []);

  if (connectWalletStatus !== 'success') {
    return;
  }

  return (
    <Common>
      <MyProjects
        onCreateAProjectClick={() => {
          router.push(ROUTES.newFundraising);
        }}
      />
    </Common>
  );
};

export default Page;
