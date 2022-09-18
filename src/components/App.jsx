import user from './Profile/user.json';
import { Profile } from './Profile';
import styled from 'styled-components';

const BlockContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  background: #edf0f7;
`;

export const App = () => {
  return (
    <BlockContainer>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
    </BlockContainer>
  );
};
