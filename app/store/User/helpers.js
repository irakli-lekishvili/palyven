import request from 'axios'
import { normalize, arrayOf } from 'normalizr-immutable'
import Schema from 'store/schemas'
import jwtDecode from 'jwt-decode'

export const decodeAuthToken = (token) => {
  const data = jwtDecode(token)
  data.auth_token = token

  return data
}

export const setToken = token => {
  request.defaults.headers.common['Authorization'] = token
  window.localStorage.setItem('auth_token', token)
}

export const unsetToken = () => {
  request.defaults.headers.common['AUTH-TOKEN'] = null
  window.localStorage.removeItem('auth_token')
}

export const reduceUsers = (data, dispatch) => {
  const normalized = normalize(data, arrayOf(Schema.user), {})
  const users = normalized.entities.users

  dispatch({ type: 'RECEIVE_USERS', users })
}
