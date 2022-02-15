import React, { useEffect } from 'react'
import { Container, Form, FormControl, Nav, Navbar } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import '../../styles/Header.css'
import { logout } from '../../actions/userActions'

function Header({ setSearch }) {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin

  //logout handler
  const logoutHandler = () => {
    dispatch(logout())
    navigate('/')
    // localStorage.removeItem('userInfo')
  }

  useEffect(() => {}, [userInfo])

  return (
    <Navbar collapseOnSelect expand='lg' bg='primary' variant='dark'>
      <Container>
        <Navbar.Brand href='/'>NoteZipper</Navbar.Brand>

        <Navbar.Toggle aria-controls='responsive-navbar-nav' />
        <Navbar.Collapse id='responsive-navbar-nav'>
          <Nav className='m-auto'>
            {userInfo && (
              <Form inline>
                <FormControl
                  type='text'
                  placeholder='Search'
                  className='mr-sm-2'
                  onChange={(e) => setSearch(e.target.value)}
                />
              </Form>
            )}
          </Nav>
          <Nav>
            {userInfo ? (
              <>
                <Nav.Link href='/mynotes'>My Notes</Nav.Link>

                <Nav.Link onClick={logoutHandler}>Logout</Nav.Link>
              </>
            ) : (
              <Nav.Link href='/login'>Login</Nav.Link>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Header
