import React, { Component } from 'react'
import {
  Container,
  Form,
  Input,
  Card,
  CardBody,
  Col,
  Label,
  FormGroup,
  Button
} from 'reactstrap'
import { connect } from 'react-redux'
import { login } from '../public/redux/actions/user'
import Swal from 'sweetalert2'

export class Login extends Component {
  constructor (props) {
    super(props)
    this.state = {
      username: '',
      password: ''
    }
  }

  login (data) {
    if (this.state.username === '' || this.state.password === '') {
      Swal.fire({
        type: 'warning',
        title: 'Login',
        text: 'Isi semua data'
      })
    } else {
      this.props
        .dispatch(login(data))
        .then(() => {
          Swal.fire({
            type: 'success',
            title: 'Login',
            text: 'Login Sukses'
          })
        })
        .then(() => {
          window.location.href = '/home'
        })
        .catch(error => {
          console.log(error)
          Swal.fire({
            type: 'error',
            title: 'Login',
            text: 'Login Gagal'
          })
        })
    }
  }

  render () {
    let { username, password } = this.state
    let data = {
      username: username,
      password: password
    }
    return (
      <Container>
        <Card style={{ width: '40%' }} className='m-auto'>
          <CardBody>
            <FormGroup row>
              <Label sm={3}>Username</Label>
              <Col sm={9}>
                <Input
                  type='username'
                  name='username'
                  placeholder='username...'
                  value={username}
                  onChange={e => this.setState({ username: e.target.value })}
                />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label sm={3}>Password</Label>
              <Col sm={9}>
                <Input
                  type='password'
                  name='password'
                  value={password}
                  placeholder='password...'
                  onChange={e => this.setState({ password: e.target.value })}
                />
              </Col>
            </FormGroup>
            <div className='m-auto'>
              <Button
                className='btn btn-primary'
                onClick={() => this.login(data)}
                style={{ width: '100%' }}
              >
                Login
              </Button>
            </div>
          </CardBody>
        </Card>
      </Container>
    )
  }
}

const mapStateToProps = state => {
  return {
    user: state.user.userList
  }
}

export default connect(mapStateToProps)(Login)
