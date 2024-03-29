import { useAppDispatch } from '@/redux/hooks';
import { setWalletStatus } from '@/redux/slices/connectWallet';
import { setError, setSuccess, setRequesting } from '@/redux/slices/fundsReceiving';
import { createConnectionParameters, logOffchainError } from '@/shared/helpers';
import { useOffchain, useMyDonatPools, useHandleError, useCardano } from '@/shared/hooks';
import type { DonatPoolTokenData, Protocol } from '@/shared/types';

function useReceiveFunds() {
  const offchain = useOffchain();
  const { connectedWalletCardanoKey } = useCardano();
  const dispatch = useAppDispatch();
  const { refetchDonatPools } = useMyDonatPools();
  const handleCommonError = useHandleError();

  function handleSuccess() {
    dispatch(setSuccess());
    dispatch(setWalletStatus('connected'));
    refetchDonatPools();
  }

  function handleError(error: string) {
    console.error('receiveFunds:', error);
    const filteredError = handleCommonError(error);
    dispatch(setError(filteredError));
  }

  if (offchain && connectedWalletCardanoKey) {
    return (donatPoolData: DonatPoolTokenData) => {
      offchain.receiveFunds(handleSuccess)(handleError)(JSON.parse(process.env.NEXT_PUBLIC_PROTOCOL) as Protocol)(
        createConnectionParameters(connectedWalletCardanoKey),
      )(donatPoolData)();
      dispatch(setRequesting());
    };
  }

  return () => logOffchainError;
}

export default useReceiveFunds;
