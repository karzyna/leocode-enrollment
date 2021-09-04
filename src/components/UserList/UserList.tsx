import UserComponent from '../User/UserListItem'
import { User } from '../UserListContainer/UserListContainer'

type UserListProps = {
    users: User[]
}

function UserList(props: UserListProps) {
    return (
        <div>
            {props.users.map((user) => {
                return <UserComponent key={user.username} user={user}></UserComponent>
            })}
        </div>
    )
}

export default UserList
