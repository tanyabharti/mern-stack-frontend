import React, { useEffect } from 'react'
import { Button, Container, Row } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import notes from '../../assets/notes.svg'

import './LandingPage.css'

const LandingPage = () => {
  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin

  const navigate = useNavigate()
  useEffect(() => {
    if (userInfo) {
      navigate('/mynotes')
    }
  }, [navigate, userInfo])

  return (
    <div className='main'>
      <Container>
        <Row>
          <div className='home'>
            <div className='intro'>
              <h1 className='title'>
                Welcome to <span className='notes'>Notes</span> Zipper
              </h1>
              <p className='sub-title'>One safe place for all your notes</p>
              <a href='/login' className='login'>
                <Button className='landing-button' size='lg'>
                  Login
                </Button>
              </a>
              <a href='/register' className='sign-up'>
                <Button
                  className='landing-button'
                  variant='outline-primary'
                  size='lg'
                >
                  Sign-Up
                </Button>
              </a>
            </div>
            <img src={notes} alt='notes' className='image' />
          </div>
        </Row>
      </Container>
    </div>
  )
}

export default LandingPage
