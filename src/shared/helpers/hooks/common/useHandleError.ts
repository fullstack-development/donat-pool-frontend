import {
  errors,
  missingCollateral,
  userDecline,
  walletDisconnect,
  walletIsNotAvailable,
} from '@/shared/constants/errors';
import { useAppDispatch } from '@/store/hooks';
import { setWalletStatus } from '@/store/slices/connectWallet';

const useHandleError = () => {
  const dispatch = useAppDispatch();

  return (backendError: string): string => {
    switch (backendError) {
      case walletDisconnect:
        dispatch(setWalletStatus('declined'));
        setTimeout(() => {
          console.error(errors[walletDisconnect]);
        }, 500);
        return errors[walletDisconnect];
      case walletIsNotAvailable:
        return errors[walletIsNotAvailable];
      case userDecline:
        return errors[userDecline];
      case missingCollateral:
        dispatch(setWalletStatus('missingCollateral'));
        return errors[missingCollateral];
      default:
        return backendError;
    }
  };
};
export { useHandleError };
