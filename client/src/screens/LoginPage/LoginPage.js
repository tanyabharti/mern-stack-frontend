import React, { useState, useEffect } from 'react'
import MainScreen from '../MainScreen'
import { Form, Button, Row, Col } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import Loading from '../../components/Loading/Loading'
import ErrorMessage from '../../components/ErrorMessage/ErrorMessage'
import { login } from '../../actions/userActions'
// import axios from 'axios'
import './LoginPage.css'

function LoginPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  // const [error, setError] = useState(false)
  // const [loading, setLoading] = useState(false)

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const userLogin = useSelector((state) => state.userLogin)
  const { loading, error, userInfo } = userLogin

  useEffect(() => {
    // const userInfo = localStorage.getItem('userInfo', JSON.stringify(data))
    if (userInfo) {
      navigate('/mynotes')
    }
  }, [navigate, userInfo])

  //submit handler for form
  const submitHandler = async (e) => {
    e.preventDefault()

    dispatch(login(email, password))
    // try {
    //   const config = {
    //     headers: {
    //       'Content-type': 'application/json',
    //     },
    //   }
    //   setLoading(true)
    //   const { data } = await axios.post(
    //     '/api/users/login',
    //     {
    //       email,
    //       password,
    //     },
    //     config
    //   )

    //   console.log(data)
    //   //local storage
    //   localStorage.setItem('userInfo', JSON.stringify(data))

    //   setLoading(false)
    // } catch (error) {
    //   setError(error.response.data.message)
    // }
  }

  return (
    <MainScreen title='LOGIN'>
      <div className='loginContainer'>
        {/* error and loading  */}
        {error && <ErrorMessage variant='danger'>{error}</ErrorMessage>}
        {loading && <Loading />}

        <Form onSubmit={submitHandler}>
          <Form.Group controlId='formBasicEmail'>
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type='email'
              value={email}
              placeholder='Enter email'
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>

          <Form.Group controlId='formBasicPassword'>
            <Form.Label style={{ marginTop: '10px' }}>Password</Form.Label>
            <Form.Control
              type='password'
              value={password}
              placeholder='Password'
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>

          <Button variant='primary' type='submit' style={{ marginTop: '14px' }}>
            Submit
          </Button>
        </Form>
        <Row className='py-3'>
          <Col>
            New User ? <Link to='/register'>Register Here</Link>
          </Col>
        </Row>
      </div>
    </MainScreen>
  )
}

export default LoginPage
