import UserListItem from '../User/UserListItem'
import { UserBasic as User } from '../../types/user-types'

type UserListProps = {
    users: User[];
    listLength?: number;
}

function UserList(props: UserListProps) {
    const truncatedUserList = props.users.slice(0, (props.listLength || 3));

    return (
        <div>
            {truncatedUserList.map((user) => {
                return <UserListItem user={user} key={user.id}></UserListItem>
            })}
        </div>
    )
}

export default UserList
