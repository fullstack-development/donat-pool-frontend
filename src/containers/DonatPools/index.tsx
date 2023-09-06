'use client';

import { Loading, NoDonatPool, ProjectCard } from '@/shared/components';
import { ROUTES } from '@/shared/constants';
import { useDonatPools } from '@/shared/hooks';

function DonatPools() {
  const { areBeingFetched: donatPoolsAreBeingFetched, donatPools, fetchError: fetchDonatPoolsError } = useDonatPools();

  return (
    <>
      {donatPoolsAreBeingFetched && <Loading />}
      {donatPools && donatPools.length !== 0 && (
        <div className="grid grid-cols-projects gap-10 max-sm:grid-cols-1 max-sm:gap-8">
          {donatPools
            .filter(({ completed }) => !completed)
            .sort(
              (firstDonatPool, secondDonatPool) => Number(firstDonatPool.deadline) - Number(secondDonatPool.deadline),
            )
            .map((donatPool) => (
              <ProjectCard key={donatPool.threadTokenCurrency} data={donatPool} linkSection={ROUTES.donatPools} />
            ))}
        </div>
      )}
      {donatPools?.filter(({ completed }) => !completed)?.length === 0 && <NoDonatPool />}
      {fetchDonatPoolsError && <div className="text-error">An error happened while fetching donat pools</div>}
    </>
  );
}

export default DonatPools;
