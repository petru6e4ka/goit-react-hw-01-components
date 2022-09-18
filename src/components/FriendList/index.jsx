import PropTypes from 'prop-types';
import { FriendListItem } from './FriendListItem';
import { FriendList as FriendListContainer } from './styles';

export const FriendList = ({ friends = [] }) => {
  return (
    <FriendListContainer>
      {friends.map(elem => (
        <FriendListItem
          key={elem.id}
          avatar={elem.avatar}
          name={elem.name}
          isOnline={elem.isOnline}
        />
      ))}
    </FriendListContainer>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string,
      name: PropTypes.string,
      isOnline: PropTypes.bool,
      id: PropTypes.number,
    })
  ),
};
