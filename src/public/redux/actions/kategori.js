import axios from 'axios'
import url from '../../url'

export const getAllCategory = () => {
  return {
    type: 'GET_CATEGORY',
    payload: axios.get(`${url}/kategori/`)
  }
}
