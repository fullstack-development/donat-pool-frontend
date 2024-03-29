import type { Config, DonatPoolTokenData, Protocol, FetchedDonatPool } from '@/shared/types';

interface ConnectionParameters {
  wallet: 'Nami' | 'Lode' | 'Flint' | 'Eternl';
  isMainnet: false;
}
interface InjectedWallet<Name> {
  name: Name;
  apiVersion: string;
  icon: string;
  enable: () => Promise<Record<string, unknown>> | never;
  isEnabled: () => Promise<boolean>;
}
type HandleError = (error: string) => void;
type FetchDonatPools = (
  onSuccess: (donatPools: FetchedDonatPool[]) => void,
) => (onError: HandleError) => (protocol: Protocol) => (connectionParameters: ConnectionParameters) => () => void;

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NEXT_PUBLIC_PROTOCOL: string;
    }
  }

  interface Window {
    cardano?: {
      nami?: InjectedWallet<'Nami'>;
      LodeWallet?: {
        name: 'LodeWallet';
        apiVersion: string;
        icon: string;
        enable: () => Promise<Record<string, unknown> | undefined>;
        isEnabled: () => Promise<boolean>;
      };
      flint?: InjectedWallet<'Flint wallet'>;
      eternl?: InjectedWallet<'eternl'>;
    };
    donatPool?: Promise<{
      getAppInfo: (
        onSuccess: (appInfo: {
          protocolConfig: {
            minAmountParam: {
              value: number;
            };
            maxAmountParam: {
              value: number;
            };
            minDurationParam: {
              value: number;
            };
            maxDurationParam: {
              value: number;
            };
            protocolFeeParam: {
              value: number;
            };
          };
          userInfo: {
            address: string;
            isManager: boolean;
          };
        }) => void,
      ) => (onError: HandleError) => (protocol: Protocol) => (connectionParameters: ConnectionParameters) => () => void;
      createFundraising: (
        onSuccess: (createdDonatPool: FetchedDonatPool) => void,
      ) => (
        onError: HandleError,
      ) => (
        protocol: Protocol,
      ) => (connectionParameters: ConnectionParameters) => (data: CreateDonatPoolParams) => () => void;
      getAllFundraisings: FetchDonatPools;
      getUserRelatedFundraisings: FetchDonatPools;
      donate: (
        onSuccess: () => void,
      ) => (
        onError: HandleError,
      ) => (
        protocol: Protocol,
      ) => (
        connectionParameters: ConnectionParameters,
      ) => (donatPoolData: DonatPoolTokenData) => (amount: number) => () => void;
      setProtocol: (
        onSuccess: (config: {
          minAmountParam: number;
          maxAmountParam: number;
          minDurationParam: number;
          maxDurationParam: number;
          protocolFeeParam: number;
        }) => void,
      ) => (onError: HandleError) => (protocol: Protocol) => (config: Config) => () => void;
      receiveFunds: (
        onSuccess: () => void,
      ) => (
        onError: HandleError,
      ) => (
        protocol: Protocol,
      ) => (connectionParameters: ConnectionParameters) => (donatPoolData: DonatPoolData) => () => void;
    }>;
  }
}

export {};
