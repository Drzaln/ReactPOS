import React, { Component } from 'react'
import {
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Container,
  Col,
  Modal,
  ModalHeader,
  ModalBody,
  Collapse,
  Nav,
  NavItem,
  NavLink,
  Button
} from 'reactstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import AddMenu from '../components/AddMenu'

export class NavbarFood extends Component {
  constructor (props) {
    super(props)
    this.toggleNavbar = this.toggleNavbar.bind(this)
    this.state = {
      collapsed: true,
      modal: false
    }
    this.toggle = this.toggle.bind(this)
  }

  toggle () {
    this.setState(prevState => ({
      modal: !prevState.modal
    }))
  }

  toggleNavbar () {
    this.setState({
      collapsed: !this.state.collapsed
    })
  }

  logout () {
    localStorage.clear()
    window.location.href = '/'
  }

  render () {
    return (
      <>
        <Container
          style={{
            width: '7%',
            height: '100%',
            backgroundColor: 'white',
            position: 'fixed',
            top: '8%',
            boxShadow: '0px 5px 4px rgba(0, 0, 0, 0.25',
            padding: 16
          }}
        >
          <Col style={{ margin: 0, padding: 0 }}>
            <img
              onClick={() => console.log('tes')}
              style={{
                marginBottom: 16,
                marginTop: 16,
                marginLeft: '15%',
                cursor: 'pointer'
              }}
              src={require('../assets/images/fork.png')}
            />
            <img
              onClick={() => console.log('tes')}
              style={{ marginBottom: 16, marginLeft: '15%', cursor: 'pointer' }}
              src={require('../assets/images/clipboard.png')}
            />
            <img
              onClick={this.toggle}
              style={{ marginBottom: 16, marginLeft: '15%', cursor: 'pointer' }}
              src={require('../assets/images/add.png')}
            />
            <Modal
              isOpen={this.state.modal}
              toggle={this.toggle}
              className={this.props.className}
              centered
            >
              <ModalHeader toggle={this.props.toggle}>Add Menu</ModalHeader>
              <ModalBody>
                <AddMenu />
              </ModalBody>
            </Modal>
          </Col>
        </Container>
        <Navbar
          color='faded'
          light
          className='shadow-sm'
          style={{ backgroundColor: 'white', position: 'fixed', width: '75%' }}
        >
          <NavbarToggler onClick={this.toggleNavbar} className='mr-auto' />
          <Collapse isOpen={!this.state.collapsed} navbar>
            <Nav navbar>
              <NavItem>
                <Button onClick={() => this.logout()}>LogOut</Button>
              </NavItem>
            </Nav>
          </Collapse>
          <NavbarBrand
            href='/'
            className='m-auto'
            style={{ fontWeight: 'bold' }}
          >
            Food Items
          </NavbarBrand>
          <FontAwesomeIcon icon={faSearch} size='1x' className='ml-auto' />
        </Navbar>
      </>
    )
  }
}

export default NavbarFood
