import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { BACK_END_URL } from '@/shared/constants';
import type { DonatPool } from '@/shared/types';

const backEnd = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: BACK_END_URL }),
  reducerPath: 'backEnd',
  endpoints: (build) => ({
    fetchDonatPools: build.query<DonatPool[], void>({
      query: () => 'fundraising-api/all-projects/',
    }),
  }),
});

const { useFetchDonatPoolsQuery } = backEnd;

export { backEnd as default, useFetchDonatPoolsQuery };
