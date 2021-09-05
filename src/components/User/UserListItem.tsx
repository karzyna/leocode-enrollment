import { UserBasic as User } from '../../types/user-types'
import styled from 'styled-components'

type UserProps = {
    user: User
}

function UserListItem(props: UserProps) {
    return (
        <UserCard>
            {props.user.name} {props.user.username}
        </UserCard>
    )
}

const UserCard = styled.div``

export default UserListItem
