import { type Fundraising } from 'shared/types';

export interface Props {
  data: Omit<Fundraising, 'creator'>;
}