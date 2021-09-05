import { Component } from 'react'
import UserList from '../UserList/UserList'
import TextInput from '../TextInput/TextInput'
import { UserBasic as User } from '../../types/user-types'
import { debounceTime, distinctUntilChanged, Subscription, Subject } from 'rxjs'

type UserListContainerState = {
    users: User[]
    isFetching: boolean
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
    }

    componentDidMount() {
        this.fetchUsers()
        this.subscription = this.onFiltering$
            .pipe(debounceTime(300), distinctUntilChanged())
            .subscribe((name: string) => this.filterUsersByName(name))
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
                this.setState({ users: result, isFetching: false })
            })
            .catch((e) => {
                console.log(e)
                this.setState({ ...this.state, isFetching: false })
            })
    }

    onFiltering = (event: React.ChangeEvent<HTMLInputElement>) => {
        const name = event.target.value
        this.onFiltering$.next(name)
    }

    filterUsersByName = (name: string) => {
        console.log(name)
    }

    render() {
        const { users, isFetching } = this.state

        return (
            <div>
                <h1>User List</h1>

                <TextInput
                    name="userSearch"
                    placeholder="Search by user name..."
                    onChange={this.onFiltering}
                />

                {isFetching ? (
                    'Fetching data, please wait'
                ) : (
                    <UserList users={users} />
                )}
            </div>
        )
    }
}
