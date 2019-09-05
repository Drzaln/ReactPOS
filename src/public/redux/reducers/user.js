const initialState = {
  userList: [],
  isLoading: false,
  isRejected: false,
  isFulFilled: false
}

const user = (state = initialState, action) => {
  switch (action.type) {
    case 'LOGIN_USER_PENDING':
      return {
        ...state,
        isLoading: true,
        isFulFilled: false,
        isRejected: false
      }
    case 'LOGIN_USER_REJECTED':
      return {
        ...state,
        isLoading: false,
        isRejected: true
      }
    case 'LOGIN_USER_FULFILLED':
      console.log(`haloooooo`, action.payload.data.result)
      const token = action.payload.data.result.token
      const id_user = action.payload.data.result.id_user
      const nama_user = action.payload.data.result.nama_user
      const username = action.payload.data.result.username
      localStorage.setItem('token', token)
      localStorage.setItem('id_user', id_user)
      localStorage.setItem('nama_user', nama_user)
      localStorage.setItem('username', username)
      return {
        ...state,
        isLoading: false,
        isFulFilled: true,
        userList: action.payload.data.result
      }
    default:
      return state
  }
}

export default user
