import React, { Component } from 'react'
import NavbarFood from '../components/NavbarFood'
import NavbarCart from '../components/NavbarCart'
import { Row, Col, Container } from 'reactstrap'
import MenuList from '../components/MenuList'

export default class App extends Component {
  render () {
    return (
      <div>
        <Container fluid>
          <Row>
            <Col md='9' style={{ paddingLeft: 0, paddingRight: 0 }}>
              <NavbarFood />
              <Container
                style={{
                  marginLeft: '9%',
                  marginTop: '5%',
                  width: '93%',
                  padding: 32,
                  backgroundColor: 'rgba(190, 195, 202, 0.3)'
                }}
              >
                <MenuList />
              </Container>
            </Col>
            <Col md='3' style={{ paddingLeft: 0, paddingRight: 0 }}>
              <NavbarCart />
            </Col>
          </Row>
        </Container>
      </div>
    )
  }
}
