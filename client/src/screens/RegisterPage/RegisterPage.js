import React, { useState, useEffect } from 'react'
import { Form, Button, Row, Col } from 'react-bootstrap'
import MainScreen from '../MainScreen'
import { Link, useNavigate } from 'react-router-dom'
import Loading from '../../components/Loading/Loading'
import { useDispatch, useSelector } from 'react-redux'
import { register } from '../../actions/userActions'
import ErrorMessage from '../../components/ErrorMessage/ErrorMessage'
// import axios from 'axios'
import './RegisterPage.css'

const RegisterPage = () => {
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [password, setPassword] = useState('')
  const [confirmpassword, setConfirmPassword] = useState('')
  const [message, setMessage] = useState(null)
  // const [error, setError] = useState(false)
  // const [loading, setLoading] = useState(false)

  const dispatch = useDispatch()

  const userRegister = useSelector((state) => state.userRegister)
  const { loading, error, userInfo } = userRegister
  const navigate = useNavigate()

  useEffect(() => {
    if (userInfo) {
      navigate('/')
    }
  }, [navigate, userInfo])

  //submit handler for register form
  const submitHandler = async (e) => {
    e.preventDefault()

    if (password !== confirmpassword) {
      setMessage('Passwords do not match')
    } else dispatch(register(name, email, password))

    // if (password !== confirmpassword) {
    //   setMessage('Passwords do not match')
    // } else setMessage(null)

    // try {
    //   const config = {
    //     headers: {
    //       'Content-type': 'application/json',
    //     },
    //   }
    //   setLoading(true)
    //   const { data } = await axios.post(
    //     '/api/users',
    //     {
    //       name,
    //       email,
    //       password,
    //     },
    //     config
    //   )

    //   setLoading(false)
    //   //local storage
    //   localStorage.setItem('userInfo', JSON.stringify(data))
    // } catch (error) {
    //   setError(error.response.data.message)
    // }
  }

  return (
    <MainScreen title='REGISTER'>
      <div className='loginContainer'>
        {/* error, message and loading components */}
        {error && <ErrorMessage variant='danger'>{error}</ErrorMessage>}
        {message && <ErrorMessage variant='danger'>{message}</ErrorMessage>}
        {loading && <Loading />}

        <Form onSubmit={submitHandler}>
          <Form.Group controlId='name'>
            <Form.Label>Name</Form.Label>
            <Form.Control
              type='name'
              value={name}
              placeholder='Enter name'
              onChange={(e) => setName(e.target.value)}
            />
          </Form.Group>

          <Form.Group controlId='formBasicEmail'>
            <Form.Label style={{ marginTop: '10px' }}>Email address</Form.Label>
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

          <Form.Group controlId='confirmPassword'>
            <Form.Label style={{ marginTop: '10px' }}>
              Confirm Password
            </Form.Label>
            <Form.Control
              type='password'
              value={confirmpassword}
              placeholder='Confirm Password'
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </Form.Group>

          <Button variant='primary' type='submit' style={{ marginTop: '13px' }}>
            Register
          </Button>
        </Form>
        <Row className='py-3'>
          <Col>
            Already Have an Account ? <Link to='/login'>Login</Link>
          </Col>
        </Row>
      </div>
    </MainScreen>
  )
}

export default RegisterPage
