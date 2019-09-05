import axios from 'axios'
import url from '../../url'

export const login = data => {
  return {
    type: 'LOGIN_USER',
    payload: axios.post(`${url}/user/login`, data)
  }
}
