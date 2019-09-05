import React, { Component } from 'react'
import {
  Navbar,
  NavbarBrand,
  Badge,
  Container,
  Card,
  CardBody,
  Row,
  Col,
  Button,
  CardTitle,
  CardSubtitle
} from 'reactstrap'

export class NavbarCart extends Component {
  constructor (props) {
    super(props)

    this.toggleNavbar = this.toggleNavbar.bind(this)
    this.state = {
      collapsed: true
    }
  }

  toggleNavbar () {
    this.setState({
      collapsed: !this.state.collapsed
    })
  }
  render () {
    return (
      <>
        <Container
          style={{
            position: 'fixed',
            backgroundColor: 'white',
            top: '8%',
            height: '100%',
            padding: 16,
            border: '1px solid #F3F3F3',
            alignItems: 'center',
            justifyItems: 'center'
          }}
        >
          {/* <div>
            <img
              style={{ marginLeft: '5%' }}
              src={require('./../assets/images/food-and-restaurant.png')}
            />
            <p
              style={{
                fontWeight: 'bold',
                fontFamily: 'Open Sans',
                marginLeft: '8%'
              }}
            >
              Your cart is empty
            </p>
            <p
              style={{
                fontWeight: 'bold',
                fontFamily: 'Open Sans',
                marginLeft: '1%',
                color: 'grey'
              }}
            >
              please add some item from the menu
            </p>
          </div> */}
          <div>
              <CardBody>
                <Row>
                  <Col md='2'>
                    <img
                      src={require('../assets/images/food-and-restaurant.png')}
                      alt='orang'
                      style={{ width: 70, height: 70 }}
                    />
                  </Col>
                  <Col md='7'>
                    <Row>
                      <Col>
                        <CardTitle>anu</CardTitle>
                      </Col>
                    </Row>
                    <Row>
                      <Col>
                        <Button onClick={() => this.decrement()}>-</Button>
                        {this.state.qty}
                        <Button onClick={() => this.increment()}>+</Button>
                      </Col>
                    </Row>
                  </Col>
                  <Col md='3'>
                    <Row>
                      <Col />
                    </Row>
                    <Row>
                      <Col>
                        <CardSubtitle style={{ fontSize: 12 }}>
                          harga
                        </CardSubtitle>
                      </Col>
                    </Row>
                  </Col>
                </Row>
              </CardBody>
          </div>
        </Container>
        <Navbar
          color='faded'
          light
          className='shadow-sm'
          style={{ backgroundColor: 'white', position: 'fixed', width: '25%' }}
        >
          <NavbarBrand className='m-auto' style={{ fontWeight: 'bold' }}>
            Cart <Badge style={{ backgroundColor: '#56cad5' }}>0</Badge>
          </NavbarBrand>
        </Navbar>
      </>
    )
  }
}

export default NavbarCart