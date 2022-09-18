import user from './Profile/user.json';
import { Profile } from './Profile';
import data from './Statistics/data.json';
import { Statistics } from './Statistics';
import friends from './FriendList/friends.json';
import { FriendList } from './FriendList';
import transactions from './TransactionHistory/transactions.json';
import { TransactionHistory } from './TransactionHistory';
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
    <>
      <BlockContainer>
        <Profile
          username={user.username}
          tag={user.tag}
          location={user.location}
          avatar={user.avatar}
          stats={user.stats}
        />
      </BlockContainer>
      <BlockContainer>
        <Statistics title="Upload stats" stats={data} />
        <Statistics stats={data} />
      </BlockContainer>
      <BlockContainer>
        <FriendList friends={friends} />
      </BlockContainer>
      <BlockContainer>
        <TransactionHistory items={transactions} />
      </BlockContainer>
    </>
  );
};
