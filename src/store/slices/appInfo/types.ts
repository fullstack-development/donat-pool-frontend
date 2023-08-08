import { type RequestStatus } from '@/shared/types';
import { type Config, type UserInfo } from '@/shared/types/common';

interface State {
  protocol: Config | null;
  userInfo: UserInfo | null;
  status: RequestStatus;
  error?: string;
}

export type { State };
