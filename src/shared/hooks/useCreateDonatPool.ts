import { useAppSelector, useAppDispatch } from '@/redux/hooks';
import { requestAllDonatPools } from '@/redux/slices/allDonatPools/thunk';
import { setWalletStatus } from '@/redux/slices/connectWallet';
import { setError, setRequesting, setCreatedPath } from '@/redux/slices/createFundraising';
import { createConnectionParameters, logOffchainError } from '@/shared/helpers';
import { useOffchain, useMyDonatPools } from '@/shared/hooks';
import type { FetchedDonatPool, CreateDonatPoolParams, Protocol } from '@/shared/types';

import useHandleError from './useHandleError';

function useCreateDonatPool() {
  const offchain = useOffchain();
  const activeWalletCardanoKey = useAppSelector((state) => state.cardano.activeWalletCardanoKey);
  const dispatch = useAppDispatch();
  const { refetchDonatPools: refetchMyDonatPools } = useMyDonatPools();
  const handleCommonError = useHandleError();

  function handleSuccess(donatPoolData: FetchedDonatPool) {
    dispatch(setCreatedPath(donatPoolData.threadTokenCurrency));
    dispatch(setWalletStatus('connected'));
    dispatch(requestAllDonatPools());
    refetchMyDonatPools();
  }

  function handleError(error: string) {
    console.error('createFundraising:', error);
    const filteredError = handleCommonError(error);
    dispatch(setError(filteredError));
  }

  if (offchain && activeWalletCardanoKey) {
    return (createDonatPoolParams: CreateDonatPoolParams) => {
      offchain.createFundraising(handleSuccess)(handleError)(JSON.parse(process.env.NEXT_PUBLIC_PROTOCOL) as Protocol)(
        createConnectionParameters(activeWalletCardanoKey),
      )(createDonatPoolParams)();
      dispatch(setRequesting());
    };
  }

  return () => logOffchainError;
}

export default useCreateDonatPool;
