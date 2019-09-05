import axios from 'axios'
import url from '../../url'

export const getAllMenu = () => {
  return {
    type: 'GET_MENU',
    payload: axios.get(`${url}/menu/`)
  }
}

export const addMenu = data => {
  return {
    type: 'ADD_MENU',
    payload: axios.post(`${url}/menu/`, data)
  }
}
