import { UserBasic as User } from '../../types/user-types'
import styled from 'styled-components'

type UserProps = {
    user: User
}

function UserListItem(props: UserProps) {
    const { name, username } = props.user

    return (
        <UserCard>
            <Name>{name}</Name>
            {`@${username}`}
        </UserCard>
    )
}

const UserCard = styled.li`
    text-align: left;
    line-height: 1.5rem;
    color: #bbb;
`

const Name = styled.span`
    margin: 0 2vw;
    color: #000;
`

export default UserListItem
