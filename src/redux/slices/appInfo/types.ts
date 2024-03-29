import type { RequestStatus, Config, UserInfo } from '@/shared/types';

interface State {
  protocol: Config | null;
  userInfo: UserInfo | null;
  status: RequestStatus;
  error?: string;
}

export type { State };
