import { render, screen, fireEvent, act } from '@testing-library/react'
import UserListContainer from './UserListContainer'
import UserList from '../UserList/UserList'
import { User } from '../../types/user-types'

const users: User[] = [
    {
        id: 1,
        name: 'Leanne Graham',
        username: 'Bret',
        email: 'Sincere@april.biz',
        address: {
            street: 'Kulas Light',
            suite: 'Apt. 556',
            city: 'Gwenborough',
            zipcode: '92998-3874',
            geo: {
                lat: '-37.3159',
                lng: '81.1496',
            },
        },
        phone: '1-770-736-8031 x56442',
        website: 'hildegard.org',
        company: {
            name: 'Romaguera-Crona',
            catchPhrase: 'Multi-layered client-server neural-net',
            bs: 'harness real-time e-markets',
        },
    },
    {
        id: 2,
        name: 'Ervin Howell',
        username: 'Antonette',
        email: 'Shanna@melissa.tv',
        address: {
            street: 'Victor Plains',
            suite: 'Suite 879',
            city: 'Wisokyburgh',
            zipcode: '90566-7771',
            geo: {
                lat: '-43.9509',
                lng: '-34.4618',
            },
        },
        phone: '010-692-6593 x09125',
        website: 'anastasia.net',
        company: {
            name: 'Deckow-Crist',
            catchPhrase: 'Proactive didactic contingency',
            bs: 'synergize scalable supply-chains',
        },
    },
]

test('checks input change', () => {
    const utils = render(<UserListContainer />)
    const input = utils.getByPlaceholderText('Search by user name...')

    fireEvent.change(input, { target: { value: 'Erv' } })
    expect((input as HTMLInputElement).value).toBe('Erv')
})

test('checks rendering user items', () => {
    const userList = render(<UserList users={users} />)

    const li = userList.queryAllByTestId('user-item')

    expect(li.length).toBe(users.length)
})

beforeEach(function () {
    global.fetch = jest.fn().mockImplementation(() => {
        const p = new Promise((resolve) => {
            resolve({
                json: () => Promise.resolve([...users]),
            })
        })

        return p
    })
})

test('checks data fetching', async () => {
    await act(async () => {
        render(<UserListContainer />)
    })

    const li = screen.queryAllByTestId('user-item')
    expect(li.length).toBe(users.length)
})
