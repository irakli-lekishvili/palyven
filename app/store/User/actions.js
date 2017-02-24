import request from 'axios'
import api from 'api'
import {
  decodeAuthToken,
  setToken,
  unsetToken,
  reduceUsers
} from './helpers'

export const setCurrentUser = user => {
  setToken(user.auth_token)
  return { type: 'SET_CURRENT_USER', id: user.id }
}

export const signin = payload => async dispatch => {
  const { data: { auth_token } } = await request.post(api.auth(), payload)
  const user = decodeAuthToken(auth_token)

  reduceUsers([user], dispatch)
  dispatch(setCurrentUser(user))
}

export const reAuthenticateUser = () => dispatch => {
  const token = window.localStorage.getItem('auth_token')
  if (token !== null) {
    const user = decodeAuthToken(token)
    reduceUsers([user], dispatch)
    dispatch(setCurrentUser(user))
  }
}

export const signout = () => async dispatch => {
  unsetToken()
  return dispatch({ type: 'RESET_STATE' })
}
