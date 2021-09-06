import { Component } from 'react'
import UserList from '../UserList/UserList'
import TextInput from '../TextInput/TextInput'
import { UserBasic as User } from '../../types/user-types'
import { debounceTime, distinctUntilChanged, Subscription, Subject } from 'rxjs'
import styled from 'styled-components'

type UserListContainerState = {
    isFetching: boolean
    users: User[]
    filteredUsers: User[]
}

export default class UserListContainer extends Component<
    {},
    UserListContainerState
> {
    subscription = new Subscription()
    onFiltering$ = new Subject<string>()

    state: UserListContainerState = {
        isFetching: false,
        users: [],
        filteredUsers: [],
    }

    componentDidMount() {
        this.fetchUsers()
        this.subscription = this.onFiltering$
            .pipe(debounceTime(300), distinctUntilChanged())
            .subscribe((filter: string) => this.filterUsersByName(filter))
    }

    componentWillUnmount() {
        if (this.subscription) {
            this.subscription.unsubscribe()
        }
    }

    fetchUsers = () => {
        const url = 'https://jsonplaceholder.typicode.com/users'
        this.setState({ ...this.state, isFetching: true })

        fetch(url)
            .then((response) => response.json())
            .then((result) => {
                this.setState({
                    users: result,
                    filteredUsers: result,
                    isFetching: false,
                })
            })
            .catch((e) => {
                console.log(e)
                this.setState({ ...this.state, isFetching: false })
            })
    }

    onFiltering = (event: React.ChangeEvent<HTMLInputElement>) => {
        const filter = event.target.value
        this.onFiltering$.next(filter)
    }

    filterUsersByName = (filter: string) => {
        this.setState({ ...this.state, filteredUsers: this.state.users })

        const result = this.state.users.filter((user) => {
            const userNameLower = user.name.toLocaleLowerCase()
            const filterLower = filter.toLocaleLowerCase()

            return userNameLower.includes(filterLower)
        })

        this.setState({ ...this.state, filteredUsers: result })
    }

    render() {
        const { filteredUsers, isFetching } = this.state

        return (
            <Wrapper>
                <h1>User List</h1>

                <TextInput
                    name="userSearch"
                    placeholder="Search by user name..."
                    onChange={this.onFiltering}
                />

                {isFetching ? (
                    'Fetching data, please wait'
                ) : (
                    <UserList users={filteredUsers} />
                )}
            </Wrapper>
        )
    }
}

const Wrapper = styled.div`
    min-height: calc(90vh - 10rem);
    padding: 5vh 5vw;
`
