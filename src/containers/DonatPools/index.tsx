'use client';

import { useMemo } from 'react';

import { useFetchDonatPoolsQuery } from '@/redux/slices/backEnd';
import { Layout, PrimaryLink, ProjectCard, Loader, FakeDonatPoolCard } from '@/shared/components';
import { ROUTES } from '@/shared/constants';

function DonatPools() {
  const { isFetching: areBeingFetched, data: donatPools, error: fetchError } = useFetchDonatPoolsQuery();
  const activeDonatPools = useMemo(() => donatPools?.filter(({ isCompleted }) => !isCompleted), [donatPools]);

  return (
    <Layout error={JSON.stringify(fetchError)}>
      <div
        className="mb-15
          max-md:mb-8
          md:flex
          md:flex-wrap
          md:items-center
          md:justify-between
          md:gap-x-5"
      >
        <h1
          className="font-rammetto-one
            text-menu-active
            text-red
            max-md:text-[2.25rem]/[2.25rem]"
        >
          All Donat.Pools
        </h1>
        <div className="max-md:fixed max-md:bottom-15 max-md:right-8 max-md:z-[1]">
          <PrimaryLink size="lg" href={ROUTES.newDonatPool}>
            Create Donat.Pool
          </PrimaryLink>
        </div>
      </div>
      {areBeingFetched ? (
        <Loader />
      ) : (
        activeDonatPools &&
        (activeDonatPools.length === 0 ? (
          <div className="w-full">
            <div className="mb-15 text-center">
              There are no projects yet. But you can be the first to create a Donat.Pool
            </div>
            <div className="grid grid-cols-projects gap-10 max-sm:grid-cols-1 max-sm:gap-8">
              <FakeDonatPoolCard />
              <FakeDonatPoolCard />
              <FakeDonatPoolCard />
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-projects gap-10 max-sm:grid-cols-1 max-sm:gap-8">
            {activeDonatPools
              .sort(
                (firstDonatPool, secondDonatPool) => Number(firstDonatPool.deadline) - Number(secondDonatPool.deadline),
              )
              .map((donatPool) => (
                <ProjectCard key={donatPool.threadTokenCurrency} data={donatPool} linkSection={ROUTES.donatPools} />
              ))}
          </div>
        ))
      )}
    </Layout>
  );
}

export default DonatPools;
