import React from 'react'
import { Col, Button, Form, FormGroup, Label, Input } from 'reactstrap'
import { connect } from 'react-redux'
import Swal from 'sweetalert2'

import { getAllCategory } from '../public/redux/actions/kategori'
import { addMenu, getAllMenu } from '../public/redux/actions/menu'
export class AddMenu extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      menus: [],
      categories: [],
      nama: '',
      foto: '',
      harga: 0,
      kategori: 1
    }
  }

  onChangeFile = e => {
    console.log(e.target.files[0])
    this.setState({
      foto: e.target.files[0],
      loaded: 0
    })
  }

  async componentDidMount () {
    await this.requestCategories()
  }

  componentWillMount () {
    this.requestMenu()
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

  requestCategories () {
    this.props
      .dispatch(getAllCategory())
      .then(() => {
        this.setState({
          categories: this.props.category
        })
      })
      .catch(error => {
        console.log(error)
      })
  }

  addMenu (formdata) {
    this.props
      .dispatch(addMenu(formdata))
      .then(() => {
        Swal.fire({
          type: 'success',
          title: 'Add Menu',
          text: 'Success Add Menu!'
        }).then(() => {
          window.location.href = '/'
        })
      })
      .catch(error => {
        console.log(error)
        Swal.fire({
          type: 'error',
          title: 'Add Menu',
          text: 'Failed To Add Menu'
        })
      })
  }

  render () {
    const { categories, nama, foto, harga, kategori } = this.state
    console.log('categories: ', categories)
    let formdata = new FormData()
    formdata.append('nama', nama)
    formdata.append('foto', foto)
    formdata.append('harga', harga)
    formdata.append('id_kategori', kategori)
    formdata.append('id_user', 2)
    formdata.append('created_at', new Date())
    formdata.append('updated_at', new Date())
    return (
      <Form>
        <FormGroup row>
          <Label for='exampleEmail' sm={2}>
            Nama
          </Label>
          <Col sm={10}>
            <Input
              type='text'
              name='name'
              value={nama}
              onChange={e => this.setState({ nama: e.target.value })}
            />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for='examplePassword' sm={2}>
            Foto
          </Label>
          <Col sm={10}>
            <Input type='file' name='foto' onChange={this.onChangeFile} />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for='exampleEmail' sm={2}>
            Harga
          </Label>
          <Col sm={10}>
            <Input
              type='number'
              name='harga'
              value={harga}
              onChange={e => this.setState({ harga: e.target.valueAsNumber })}
            />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for='exampleSelect' sm={2}>
            Kategori
          </Label>
          <Col sm={10}>
            <select
              type='select'
              name='select'
              className='form-control'
              onSelect={category => this.setState({ category })}
            >
              {categories && categories.length > 0 ? (
                categories.map((item, key) => {
                  return (
                    <option value={item.id_kategori} key={key}>
                      {item.kategori}
                    </option>
                  )
                })
              ) : (
                <option>Oops no data!</option>
              )}
            </select>
          </Col>
        </FormGroup>
        <FormGroup check row className='mt-4'>
          <Col>
            <Button
              className='float-right'
              style={{ backgroundColor: '#F24F8A', borderColor: 'transparent' }}
              onClick={() => this.addMenu(formdata)}
            >
              Add
            </Button>
          </Col>
          <Col>
            <Button
              className='float-right mr-3'
              style={{ backgroundColor: '#57CAD5', borderColor: 'transparent' }}
            >
              Cancel
            </Button>
          </Col>
        </FormGroup>
      </Form>
    )
  }
}

const mapStateToProps = state => {
  return {
    menu: state.category.menuList,
    category: state.category.catList
  }
}

export default connect(mapStateToProps)(AddMenu)
