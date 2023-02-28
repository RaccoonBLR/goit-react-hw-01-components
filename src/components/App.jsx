import { Profile } from 'components/Profile/Profile';
import { Statistics } from 'components/Statistics/Statistics';
import { TransactionHistory } from 'components/TransactionHistory/TransactionHistory';
import { FriendList } from 'components/FriendList/FriendList';
import user from 'data/user';
import data from 'data/data';
import friends from 'data/friends';
import transactions from 'data/transactions';

export const App = () => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 60,
        fontSize: 40,
        paddingTop: 50,
        paddingBottom: 50,
        color: '#010101',
      }}
    >
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />

      <Statistics title="Upload stats" stats={data} />

      <FriendList friends={friends} />

      <TransactionHistory transactions={transactions} />
    </div>
  );
};
