import React from 'react'
import { Container,Row,Col } from 'react-bootstrap'
import '../../styles/Footer.css'

const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col className="text">
            Copyright &copy; Notes Zipper
          </Col>
        </Row>
    </Container>


    </footer>


  )
}

export default Footer
