'use client';

import { useParams, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

import { PrivateProjectsActions, RaisedCounter, Project, Layout } from '@/shared/components';
import { ROUTES } from '@/shared/constants';
import { convertLovelaceToADA, formatDate } from '@/shared/helpers';
import { useMyDonatPools } from '@/shared/hooks';
import type { DonatPool } from '@/shared/types';

import THEME from './constants';

function MyDonatPool() {
  const params = useParams();
  const router = useRouter();
  const { donatPools, fetchError } = useMyDonatPools();
  const [currentDonatPool, setCurrentDonatPool] = useState<DonatPool | null>(null);

  useEffect(() => {
    if (donatPools) {
      const project = donatPools.find(({ threadTokenCurrency }) => threadTokenCurrency === params.id);

      if (project) {
        setCurrentDonatPool(project);
      } else {
        setCurrentDonatPool(null);
      }
    }
  }, [donatPools, params.id]);

  function getTheme(completed: boolean) {
    return completed ? THEME.completed : THEME.active;
  }

  function handlePreviousPageClick() {
    router.push(ROUTES.myDonatPools);
  }

  return (
    <Layout error={fetchError}>
      {currentDonatPool && (
        <Project
          previousPageTitle="My Donat.Pools"
          title={currentDonatPool.title}
          onPreviousPageClick={handlePreviousPageClick}
        >
          <div className="max-w-[37.5rem]">
            <div className="flex items-center justify-between border-b-2 border-t-2 border-black py-7">
              <div
                className={`font-bold ${
                  getTheme(currentDonatPool.isCompleted).classes
                } rounded-md border-2 px-3 py-2 text-sm`}
              >
                {getTheme(currentDonatPool.isCompleted).text}
              </div>
              <div className="text-xl font-bold">Until {formatDate(Number(currentDonatPool.deadline))}</div>
            </div>
            <div className="flex border-b-2 border-black py-6">
              <RaisedCounter
                raised={convertLovelaceToADA(currentDonatPool.raisedAmt)}
                goal={convertLovelaceToADA(currentDonatPool.goal)}
              />
            </div>
            <PrivateProjectsActions project={currentDonatPool} />
          </div>
        </Project>
      )}
    </Layout>
  );
}

export default MyDonatPool;
