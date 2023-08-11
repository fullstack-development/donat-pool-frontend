'use client';

import { useParams, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

import { Common, Project } from '@/layouts';
import { PrivateProjectsActions, RaisedCounter } from '@/shared/components';
import { ROUTES } from '@/shared/constants';
import { formatDate } from '@/shared/helpers';
import { useUserFundraisings } from '@/shared/hooks';
import type { Fundraising } from '@/shared/types';

import { CounterWrapper, Deadline, DeadlineAndStatus, Inner, Status } from './PrivateProject.styled';

const Page = () => {
  const params = useParams();
  const router = useRouter();
  const { fundraisings } = useUserFundraisings();
  const [currentProject, setCurrentProject] = useState<Fundraising | null>(null);

  useEffect(() => {
    if (fundraisings) {
      const project = fundraisings.find(({ threadTokenCurrency }) => threadTokenCurrency === params.id);
      if (project) {
        setCurrentProject(project);
      } else {
        setCurrentProject(null);
      }
    }
  }, [fundraisings, params.id]);

  return (
    currentProject && (
      <Common>
        <Project
          previousPageTitle="My projects"
          onPreviousPageClick={() => {
            router.push(ROUTES.userFundraisings);
          }}
          title={currentProject.title}
        >
          <Inner>
            <DeadlineAndStatus>
              <Status isActive={!currentProject.isCompleted}>
                {currentProject.isCompleted ? 'Completed' : 'Active'}
              </Status>
              <Deadline>Until {formatDate(Number(currentProject.deadline))}</Deadline>
            </DeadlineAndStatus>
            <CounterWrapper>
              <RaisedCounter
                raised={Number(currentProject.raisedAmt) / 1000000}
                goal={Number(currentProject.goal) / 1000000}
              />
            </CounterWrapper>
            <PrivateProjectsActions project={currentProject} />
          </Inner>
        </Project>
      </Common>
    )
  );
};

export default Page;