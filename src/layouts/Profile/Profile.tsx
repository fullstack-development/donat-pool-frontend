import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';

import {
  setUserProjects,
  setUserProjectsSuccess,
} from 'features/info/redux/actionCreators';
import Button from 'shared/components/Button/Button';
import ProjectCreator from 'shared/components/ProjectCreator/ProjectCreator';
import ProjectInfo from 'shared/components/ProjectInfo/ProjectInfo';
import ProjectSidebar from 'shared/components/ProjectSidebar/ProjectSidebar';
import { useOffchain } from 'shared/hooks/useOffchain';
import { type Project, type AppReduxState } from 'shared/types';

import {
  CreateButtonWrapper,
  Main,
  ProjectWrapper,
  Starter,
  Wrapper,
} from './Profile.styled';
import fixedProtocol from '../../../startProtocolParams';

const Profile = ({ defaultMode = null }) => {
  const [mode, setMode] = useState<Project | 'creation' | null>(defaultMode);
  const offchain = useOffchain();
  const dispatch = useDispatch();
  const userProjects = useSelector(
    (state: AppReduxState) => state.info.data.userProjects
  );

  const handleGetFundraisingSuccess = (projects) => {
    const filteredProjects = projects.map(
      ({
        creator,
        deadline,
        description,
        goal,
        raisedAmt,
        threadTokenCurrency,
        threadTokenName,
      }) => {
        return {
          creator,
          deadline: Number(deadline.value),
          description,
          goal: Number(goal.value),
          raisedAmount: Number(raisedAmt.value),
          threadTokenCurrency,
          threadTokenName,
        };
      }
    );
    dispatch(setUserProjectsSuccess(filteredProjects));
  };
  const handleGetFundraisingError = (error) => {
    toast.error(error);
  };

  useEffect(() => {
    if (offchain) {
      offchain.getUserRelatedFundraisings(handleGetFundraisingSuccess)(
        handleGetFundraisingError
      )(fixedProtocol)();
      dispatch(setUserProjects());
    }
  }, [offchain]);

  const getId = (project: Project) => {
    return project.threadTokenCurrency.toString();
  };

  const handleSidebarClick = (id) => {
    const clickedProject = userProjects?.find((item) => getId(item) === id);
    if (clickedProject != null) {
      setMode(clickedProject);
    }
  };

  const getCurrentId = () => {
    if (mode === null || mode === 'creation') {
      return null;
    }
    return getId(mode);
  };

  return (
    <Wrapper>
      <CreateButtonWrapper>
        <Button
          theme="bordered"
          onClick={() => {
            setMode('creation');
          }}
        >
          create project
        </Button>
      </CreateButtonWrapper>
      <Main>
        <ProjectSidebar
          projects={
            userProjects
              ? userProjects.map((project) => {
                  return {
                    title: project.description,
                    id: getId(project),
                  };
                })
              : null
          }
          onClick={handleSidebarClick}
          currentId={getCurrentId()}
        />

        <ProjectWrapper>
          {mode === 'creation' && (
            <ProjectCreator
              onClose={() => {
                setMode(null);
              }}
            />
          )}
          {mode === null && (
            <Starter>Create a new project or choose one</Starter>
          )}
          {mode !== null && mode !== 'creation' && (
            <ProjectInfo
              deadline={mode.deadline}
              description={mode.description}
              goal={mode.goal}
              raisedAmount={mode.raisedAmount}
            />
          )}
        </ProjectWrapper>
      </Main>
    </Wrapper>
  );
};

export default Profile;
