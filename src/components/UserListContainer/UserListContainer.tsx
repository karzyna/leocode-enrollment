import { Component } from 'react';
import UserList from '../UserList/UserList';

export interface User {
    name: string
    username: string
}

export interface UserListContainerState {
    users: User[]
    isFetching: boolean
}

export default class UserListContainer extends Component<
    {},
    UserListContainerState
> {
    state: UserListContainerState = {
        isFetching: false,
        users: [],
    }

    componentDidMount() {
        this.fetchUsers()
    }

    fetchUsers = () => {
        const url = 'https://jsonplaceholder.typicode.com/users'
        this.setState({ ...this.state, isFetching: true })

        fetch(url)
            .then((response) => response.json())
            .then((result) => {
                this.setState({ users: result, isFetching: false })
            })
            .catch((e) => {
                console.log(e)
                this.setState({ ...this.state, isFetching: false })
            })
    }

    render() {

        return (
            <div>
                <UserList users={this.state.users} />
            </div>
        )
    }
}
