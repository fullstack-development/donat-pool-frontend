import { setWalletStatus } from '@/redux/slices/connectWallet';
import { setError, setSuccess, setRequesting } from '@/redux/slices/fundsReceiving';
import { createConnectionParameters, logOffchainError } from '@/shared/helpers';
import { useAppSelector, useAppDispatch, useOffchain, useUserFundraisings } from '@/shared/hooks';
import { FundraisingData } from '@/shared/types/common';

import useHandleError from './useHandleError';

function useReceiveFunds() {
  const offchain = useOffchain();
  const activeWalletCardanoKey = useAppSelector((state) => state.cardano.activeWalletCardanoKey);
  const dispatch = useAppDispatch();
  const { refetchFundraisings: refetchUserFundraisings } = useUserFundraisings();
  const handleCommonError = useHandleError();

  function handleSuccess() {
    dispatch(setSuccess());
    dispatch(setWalletStatus('connected'));
    refetchUserFundraisings();
  }

  function handleError(error: string) {
    console.error('receiveFunds:', error);
    const filteredError = handleCommonError(error);
    dispatch(setError(filteredError));
  }

  if (offchain && activeWalletCardanoKey) {
    return (fundraisingData: FundraisingData) => {
      offchain.receiveFunds(handleSuccess)(handleError)(JSON.parse(process.env.NEXT_PUBLIC_PROTOCOL))(
        createConnectionParameters(activeWalletCardanoKey),
      )(fundraisingData)();
      dispatch(setRequesting());
    };
  }

  return () => logOffchainError;
}

export default useReceiveFunds;
