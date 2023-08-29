'use client';

import cn from 'classnames';
import { useParams, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

import { Common, Project } from '@/layouts';
import { PrivateProjectsActions, RaisedCounter } from '@/shared/components';
import { ROUTES } from '@/shared/constants';
import { formatDate } from '@/shared/helpers';
import { useMyDonatPools } from '@/shared/hooks';
import { DonatPool } from '@/shared/types';

import THEME from './constants';

function Page() {
  const params = useParams();
  const router = useRouter();
  const { donatPools } = useMyDonatPools();
  const [currentProject, setCurrentProject] = useState<DonatPool | null>(null);

  useEffect(() => {
    if (donatPools) {
      const project = donatPools.find(({ threadTokenCurrency }) => threadTokenCurrency === params.id);

      if (project) {
        setCurrentProject(project);
      } else {
        setCurrentProject(null);
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
    currentProject && (
      <Common>
        <Project
          previousPageTitle="My projects"
          title={currentProject.title}
          onPreviousPageClick={handlePreviousPageClick}
        >
          <div className="max-w-[37.5rem]">
            <div className="flex items-center justify-between border-b-2 border-t-2 border-black py-7">
              <div
                className={cn(
                  `font-bold ${getTheme(currentProject.completed).classes} rounded-md border-2 px-3 py-2 text-sm`,
                )}
              >
                {getTheme(currentProject.completed).text}
              </div>
              <div className="text-xl font-bold">Until {formatDate(Number(currentProject.deadline))}</div>
            </div>
            <div className="flex border-b-2 border-black py-6">
              <RaisedCounter
                raised={Number(currentProject.raisedAmt) / 1000000}
                goal={Number(currentProject.goal) / 1000000}
              />
            </div>
            <PrivateProjectsActions project={currentProject} />
          </div>
        </Project>
      </Common>
    )
  );
}

export default Page;