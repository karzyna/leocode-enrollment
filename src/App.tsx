import UserListContainer from './components/UserListContainer/UserListContainer'
import ReactLogo from '../src/assets/images/logo.svg'
import styled from 'styled-components'

function App() {
    return (
        <ApplicationWrapper>
            <Header>
                <Logo src={ReactLogo} alt="logo" />
            </Header>
            <main>
                <UserListContainer />
            </main>
            <Footer as="footer">Coded by Katarzyna Surel</Footer>
        </ApplicationWrapper>
    )
}

export default App

const ApplicationWrapper = styled.div`
    text-align: center;
`
const Header = styled.header`
    background-color: #282c34;
    height: 5rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: white;
`

const Footer = styled(Header)``

const Logo = styled.img`
    height: 3rem;
    pointer-events: none;
`
