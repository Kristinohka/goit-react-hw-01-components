import { TransactionHistory } from '../TransactionHistory/TransactionHistory';
import { Statistics } from '../Statistics/Statistics';
import { Profile } from '../Profile/Profile';
import { FriendList } from '../FriendList/FriendList';
import data from '../../data.json';
import user from '../../user.json';
import transactions from '../../transactions.json';
import friends from '../../friends.json';
import { Container } from './App.styled';

export const App = () => {
  return (
    <Container>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </Container>
  );
};