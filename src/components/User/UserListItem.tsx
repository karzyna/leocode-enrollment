import { User } from '../UserListContainer/UserListContainer';

type UserProps = {
    user: User
}

function UserListItem(props: UserProps) {
    return (
      <div>
          { props.user.name } { props.user.username }
      </div>
    );
  }

export default UserListItem;