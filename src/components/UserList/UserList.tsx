import UserListItem from '../User/UserListItem'
import { UserBasic as User } from '../../types/user-types'
import styled from 'styled-components'

type UserListProps = {
    users: User[]
    listLength?: number
}

function UserList(props: UserListProps) {

    return props.users.length > 0 ? (
        <List>
            {props.users.map((user) => {
                return <UserListItem user={user} key={user.id}></UserListItem>
            })}
        </List>
    ) : (
        <p>Didn't found users matching current search criteria</p>
    )
}

const List = styled.ol`
    width: max-content;
    margin: 1rem auto;
`

export default UserList
