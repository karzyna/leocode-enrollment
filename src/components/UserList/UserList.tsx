import UserListItem from '../User/UserListItem'
import { UserBasic as User } from '../../types/user-types'
import styled from 'styled-components'

type UserListProps = {
    users: User[]
    listLength?: number
}

function UserList(props: UserListProps) {
    return (
        <Wrapper>
            {props.users.length > 0 ? (
                <List>
                    {props.users.map((user) => {
                        return (
                            <UserListItem
                                user={user}
                                key={user.id}
                            ></UserListItem>
                        )
                    })}
                </List>
            ) : (
                <p>No users matching current search criteria found</p>
            )}
        </Wrapper>
    )
}

const List = styled.ol`
    width: max-content;
`
const Wrapper = styled.div`
    margin: 2.5rem auto;
    display: flex;
    justify-content: center;
`

export default UserList
