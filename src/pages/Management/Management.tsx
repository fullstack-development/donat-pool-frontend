import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { useAppSelector } from 'core/hooks';
import { Common } from 'layouts';
import { ManagementParams, ManagerEditor } from 'shared/components';

import { Title, Wrapper } from './Management.styled';

const Management = () => {
  const {
    appInfo: { userInfo, protocol },
    wallet: { status },
  } = useAppSelector((state) => state);

  const navigate = useNavigate();

  useEffect(() => {
    document.title = 'Management';
  }, []);

  useEffect(() => {
    if (userInfo && !userInfo.isManager) {
      navigate('/all-projects');
    }
  }, [userInfo]);

  return status !== 'requesting' ? (
    <Common>
      <Title>Management contract</Title>
      <Wrapper>
        {protocol && (
          <>
            <ManagerEditor config={protocol} />
            <ManagementParams config={protocol} />
          </>
        )}
      </Wrapper>
    </Common>
  ) : (
    <></>
  );
};
export default Management;