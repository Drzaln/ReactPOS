import React, { Component } from 'react'
import {
  Card,
  CardImg,
  CardBody,
  CardTitle,
  CardSubtitle,
  Row,
  Col,
  Spinner
} from 'reactstrap'
import { connect } from 'react-redux'

import { getAllMenu } from '../public/redux/actions/menu'

export class MenuList extends Component {
  constructor (props) {
    super(props)

    this.state = {
      menus: [],
      isLoading: true
    }
  }

  async componentDidMount () {
    await this.requestMenu()
  }

  requestMenu () {
    this.props
      .dispatch(getAllMenu())
      .then(() => {
        this.setState({
          menus: this.props.menu,
          isLoading: false
        })
      })
      .catch(error => {
        console.log('error ', error)
      })
  }

  textSplit (text) {
    if (text.length > 10) {
      let textSplit = text.substr(0, 25)
      return `${textSplit} ...`
    } else {
      let textSplit = text
      return `${textSplit}`
    }
  }

  render () {
    const { menus, isLoading } = this.state
    console.log('menu list: ', this.state.menus)
    return (
      <div>
        <Row>
          {isLoading ? (
            <Spinner color='success' className='m-auto mt-5' />
          ) : menus && menus.length > 0 ? (
            menus.map((item, key) => {
              return (
                <Col md='4' key={key} style={{ position: 'inherit' }}>
                  <Card
                    className='mt-1 mb-auto'
                    style={{
                      backgroundColor: 'transparent',
                      borderColor: 'transparent',
                      cursor: 'pointer'
                    }}
                    onClick={() => this.props.addCart(item)}
                  >
                    <CardImg
                      top
                      width='100%'
                      height='170'
                      src={item.foto}
                      alt='Card image cap'
                      style={{
                        borderTopLeftRadius: 16,
                        borderTopRightRadius: 16
                      }}
                    />
                    <CardBody>
                      <CardTitle>{item.nama}</CardTitle>
                      <CardSubtitle style={{ fontWeight: 'bold' }}>
                        Rp. {item.harga}
                      </CardSubtitle>
                    </CardBody>
                  </Card>
                </Col>
              )
            })
          ) : (
            <p>oops no data!</p>
          )}
        </Row>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    menu: state.menu.menuList
  }
}

export default connect(mapStateToProps)(MenuList)
