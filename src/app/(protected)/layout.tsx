'use client';

import { useEffect } from 'react';

import { setInitialized as setCardanoInitialized, setActiveWalletCardanoKey } from '@/redux/slices/cardano';
import ConnectWalletModal from '@/shared/components/ConnectWalletModal/ConnectWalletModal';
import { useAppSelector, useAppDispatch } from '@/shared/hooks';

function Layout({ children }: React.PropsWithChildren) {
  const cardanoIsInitialized = useAppSelector((state) => state.cardano.initialized);
  const someWalletIsActive = useAppSelector((state) => Boolean(state.cardano.activeWalletCardanoKey));
  const dispatch = useAppDispatch();

  useEffect(() => {
    async function initializeCardano() {
      if (Object.hasOwn(window, 'cardano')) {
        for (const walletCardanoKey of ['nami', 'LodeWallet', 'flint', 'eternl'] as const) {
          if (
            Object.hasOwn(window.cardano as any, walletCardanoKey) &&
            ((await window.cardano?.[walletCardanoKey]?.isEnabled()) as any)
          ) {
            dispatch(setActiveWalletCardanoKey(walletCardanoKey));
            break;
          }
        }
      }

      dispatch(setCardanoInitialized(true));
    }

    if (!cardanoIsInitialized) {
      initializeCardano();
    }
  }, [cardanoIsInitialized, dispatch]);

  if (cardanoIsInitialized) {
    return someWalletIsActive ? children : <ConnectWalletModal />;
  }
}

export default Layout;
